import { useState, useCallback } from "react";
import { apiUrl } from "../services/api.service"; // Centralized API

const useFaceDetection = () => {
  const [boxes, setBoxes] = useState([]);
  const [entries, setEntries] = useState(0);

  const calculateFaceLocation = useCallback((boundingBox, image) => {
    const width = Number(image.width);
    const height = Number(image.height);
    const { id, box } = boundingBox;
    return {
      id: id,
      leftCol: box.left_col * width,
      topRow: box.top_row * height,
      rightCol: width - box.right_col * width,
      bottomRow: height - box.bottom_row * height,
    };
  }, []);

  const detectFacesInImage = async (imageUrl, userId) => {
    fetch(`${apiUrl}/imageurl`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: imageUrl,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch(`${apiUrl}/image`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: userId,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              setEntries(count);
            })
            .catch(console.log);
        }

        const boundingBoxes = response.outputs[0].data.regions.map((region) => {
          return { id: region.id, box: region.region_info.bounding_box };
        });
        const image = document.getElementById("inputImage");
        const boxes = boundingBoxes.map((boundingBox) => {
          return calculateFaceLocation(boundingBox, image);
        });
        setBoxes(boxes);
      })
      .catch((err) => console.log(err));
  };

  return { boxes, entries, detectFacesInImage };
};

export default useFaceDetection;
