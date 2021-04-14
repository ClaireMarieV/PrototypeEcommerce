import { useState } from "react";

const Picture = ({ picture }) => {
  const [pictureLoaded, setPictureLoaded] = useState(false);

  if (typeof picture === "object" && !picture.preview) {
    picture = picture.picture;
  }
  if (typeof picture === "string") {
    return <img src={picture} />;
  } else {
    return (
      <>
        <img
          src={picture.picture}
          onLoad={() => setPictureLoaded(true)}
          hidden={!pictureLoaded}
        />
        <img className="preview" src={picture.preview} hidden={pictureLoaded} />
        <style jsx>{`
          .preview {
            filter: blur(2px);
            max-width: 28vw;
            width: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}</style>
      </>
    );
  }
};

export default Picture;
