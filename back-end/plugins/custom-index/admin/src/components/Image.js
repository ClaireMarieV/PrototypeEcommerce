import React, { useState, useEffect } from "react";

const Image = ({ element, setElementImage }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const upload = (e) => {
    const formData = new FormData();

    Array.from(images).map((image) => formData.append("files", image));

    setLoading(true);
    setError(null);
    fetch("http://admin.habaah.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((files) => {
        setElementImage(files[0]._id);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <label>
        Image :
        <input
          id="file"
          type="file"
          onChange={(event) => setImages(event.target.files)}
        />
        <button onClick={upload}>Submit</button>
      </label>
      <style jsx>
        {`
          input#file {
            border: none;
            background: none;
          }
        `}
      </style>
    </div>
  );
};

export default Image;
