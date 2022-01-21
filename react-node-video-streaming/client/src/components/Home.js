import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const fetchVideos = async () => {
  const res = await fetch("http://localhost:5000/videos");
  const data = await res.json();
  return data;
};

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos().then((videos) => {
      setVideos(videos);
    });
  }, []);

  return (
    <div className="App App-header">
      <div className="container">
        <div className="row">
          {videos.map((video) => (
            <div className="col-md-4" key={video.id}>
              <Link to={`/player/${video.id}`}>
                <div className="card border-0">
                  <img
                    src={`http://localhost:5000/video/${video.id}/poster`}
                    alt={video.name}
                  />
                  <div className="card-body">
                    <p>{video.name}</p>
                    <p>{video.duration}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
