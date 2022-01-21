const express = require("express");
const thumbsupply = require("thumbsupply");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const videos = [
  {
    id: 0,
    poster: "/video/0/poster",
    duration: "3 min",
    name: "Sample 1",
  },
  {
    id: 1,
    poster: "/video/1/poster",
    duration: "3 min",
    name: "Sample 2",
  },
  {
    id: 2,
    poster: "/video/2/poster",
    duration: "3 min",
    name: "Sample 3",
  },
  {
    id: 3,
    poster: "/video/3/poster",
    duration: "3 min",
    name: "Sample 4",
  },
];

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to the server !" });
});

router.get("/video/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const root_folder = path.resolve(__dirname, "../../");
  const filePath = path.join("assets", `/sample${id + 1}.mp4`);
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const { range } = req.headers;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head); // status code 206 indicates that the response contains partial content
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});

router.get("/video/:id/poster", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const filePath = path.join("assets", `/sample${id + 1}.mp4`);
  thumbsupply.generateThumbnail(filePath).then((thumbnail) => {
    res.status(200).sendFile(thumbnail);
  });
});

router.get("/videos", (req, res) => {
  return res.status(200).json(videos);
});

router.get("/video/:id/data", (req, res) => {
  const id = parseInt(req.params.id, 10);
  return res.status(200).json(videos[id]);
});

module.exports = router;
