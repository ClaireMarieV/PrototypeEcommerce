import React from "react";

const Image = ({ element }) => {
  return (
    <label>
      Image :
      <input type="file" name="files" />
      <input type="submit" value="Submit" />
    </label>
  );
};

export default Image;
