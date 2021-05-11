import Image from "next/image";

const Image3 = ({ image }) => (
  <div className="container-image-3">
    <Image src="" width="1200" height="1800" />
    <style jsx global>{`
      .container-image-3 {
        grid-column: 1 / 4;
        grid-row: 1 / 4;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
      }
    `}</style>
  </div>
);
export { Image3 };

const Image4 = ({ text }) => (
  <div className="container-image-4">
    <Image src="" width="1200" height="1800" />
    <style jsx global>{`
      .container-image-4 {
        grid-column: 1 / 5;
        grid-row: 1 / 6;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
      }
    `}</style>
  </div>
);
export { Image4 };

const Image6 = ({ text }) => (
  <div className="container-image-6">
    <Image src="" width="1200" height="1800" />
    <style jsx global>{`
      .container-image-6 {
        grid-column: 1 / 7;
        grid-row: 1 / 6;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
      }
    `}</style>
  </div>
);
export { Image6 };

const Image12 = ({ text }) => (
  <div className="container-image-12">
    <Image src="" width="1200" height="1800" />
    <style jsx global>{`
      .container-image-12 {
        grid-column: 1 / 13;
        grid-row: 1 / 6;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1rem;
      }
    `}</style>
  </div>
);
export { Image12 };
