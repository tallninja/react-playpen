import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const fetchVideoData = async (id) => {
  const res = await fetch(`http://localhost:5000/video/${id}/data`);
  const data = await res.json();
  return data;
};

function Player(props) {
  const [videoData, setVideoData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchVideoData(id).then((data) => {
      setVideoData(data);
    });
  }, [id]);

  return (
    <>
      <div className="App">
        <header className="App-Header">
          <video
            controls
            autoPlay
            src={`http://localhost:5000/video/${id}`}
          ></video>
          <h1>{videoData.name}</h1>
        </header>
      </div>
    </>
  );
}

export default Player;
