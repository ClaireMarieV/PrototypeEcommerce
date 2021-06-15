import React, { useState } from "react";

const Image = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const input = document.getElementById("file");

  const upload = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("images", event.target.files[0]);
    fetch("/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
    })
      .then(() => {
        setLoading(false);
      })
      .then((success) => console.log(success))
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  return (
    <>
      <label>
        Image :
        <input id="file" type="file" />
        <button type="submit" onClick={upload}>
          Submit
        </button>
      </label>
      <style jsx>
        {`
          input#file {
            border: none;
            background: none;
          }
        `}
      </style>
    </>
  );
};

export default Image;
