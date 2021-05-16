const Text3 = ({ element, gridMultiplier }) => (
  <div
    className="container-text-3"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
    }}
  >
    <span>{element.text}</span>

    <style jsx>{`
      .container-text-3 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-bottom: 2px solid;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
export { Text3 };

const Text4 = ({ element, gridMultiplier }) => (
  <div
    className="container-text-4"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
    }}
  >
    <span>{element.text}</span>
    <style jsx>{`
      .container-text-4 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-bottom: 2px solid;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
export { Text4 };

const Text6 = ({ element, gridMultiplier }) => (
  <div
    className="container-text-6"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
    }}
  >
    <span>{element.text}</span>
    <button>Découvrir</button>

    <style jsx>{`
      .container-text-6 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-bottom: 2px solid;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
export { Text6 };

const Text9 = ({ element, gridMultiplier }) => (
  <div
    className="container-text-9"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
    }}
  >
    <span>{element.text}</span>
    <button>Découvrir</button>
    <style jsx>{`
      .container-text-9 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-bottom: 2px solid;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
export { Text9 };

const Text12 = ({ element, gridMultiplier }) => (
  <div
    className="container-text-12"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
    }}
  >
    <span>{element.text}</span>
    <button>Découvrir</button>

    <style jsx>{`
      .container-text-12 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-bottom: 2px solid;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
export { Text12 };
