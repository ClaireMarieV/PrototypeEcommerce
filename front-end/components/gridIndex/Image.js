import Image from "next/image";

const Image3 = ({ element }) => (
  <div className="container-image-3">
    <img
      src={`http://localhost:1337${element.image.formats.large.url}`}
      width="500"
      height="500"
    />
    <style jsx global>{`
      .container-image-3 {
        grid-column: 1 / 4;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
        width: 100%;
      }
      img {
        object-fit: contain !important;
      }
    `}</style>
  </div>
);
export { Image3 };

const Image4 = ({ element }) => (
  <div className="container-image-4">
    <img
      src={`http://localhost:1337${element.image.formats.large.url}`}
      width="500"
      height="500"
    />
    <style jsx global>{`
      .container-image-4 {
        grid-column: 1 / 5;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
        width: 100%;
      }
      img {
        object-fit: contain !important;
      }
    `}</style>
  </div>
);
export { Image4 };

const Image6 = ({ element }) => (
  <div className="container-image-6">
    <img
      src={`http://localhost:1337${element.image.formats.large.url}`}
      width="500"
      height="500"
    />
    <style jsx global>{`
      .container-image-6 {
        grid-column: 1 / 7;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
        width: 100%;
      }
      img {
        object-fit: contain !important;
      }
    `}</style>
  </div>
);
export { Image6 };

const Image8 = ({ element }) => (
  <div className="container-image-8">
    <img
      src={`http://localhost:1337${element.image.formats.large.url}`}
      width="500"
      height="500"
    />
    <style jsx global>{`
      .container-image-8 {
        grid-column: 1 / 7;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
        width: 100%;
      }
      img {
        object-fit: contain !important;
      }
    `}</style>
  </div>
);
export { Image8 };

const Image9 = ({ element }) => (
  <div className="container-image-9">
    <img
      src={`http://localhost:1337${element.image.formats.large.url}`}
      width="800"
      height="500"
    />
    <style jsx global>{`
      .container-image-9 {
        grid-column: 1 /10;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
        width: 100%;
      }
      img {
        object-fit: contain !important;
      }
    `}</style>
  </div>
);
export { Image9 };

const Image12 = ({ element }) => (
  <div className="container-image-12">
    <img
      src={`http://localhost:1337${element.image.formats.large.url}`}
      width="1400"
      height="500"
    />
    <style jsx global>{`
      .container-image-12 {
        grid-column: 1 / 13;
        grid-row: 2 / 3;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
        width: 100%;
      }
      img {
        object-fit: contain !important;
      }
    `}</style>
  </div>
);
export { Image12 };
