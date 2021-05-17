import React, { useEffect, useState } from "react";

const Image = ({ element }) => (
  <>
    <label>
      Image :
      <input type="file" name="files" />
      <input type="submit" value="Submit" />
    </label>
  </>
);

export default Image;
