import React from "react";
import "./face-recognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div id="container" className="center">
      <img id="inputImage" alt="" src={imageUrl} width="500px" height="auto" />
      {boxes.map((box) => {
        return (
          <div
            key={box.id}
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FaceRecognition;
