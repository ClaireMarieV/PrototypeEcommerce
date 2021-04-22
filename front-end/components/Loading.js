const Error = () => (
  <div className="loading">
    <h1 className="load">Loading</h1>
    <div className="dots">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <style jsx>{`
      .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-items: center;
        gap: 2rem;
        margin: 4rem auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100vh;
      }
      h1 {
        text-transform: uppercase;
        font-size: 5rem;
        display: flex;
      }
      section {
        display: flex;
        flex-direction: column;
      }
      img {
        max-width: 50rem;
        width: 100%;
      }
      @media (max-width: 500px) {
        .container {
          width: 100%;
        }
      }

      .dots {
        display: flex;
        position: relative;
        top: 20px;
        left: -10px;
        width: 100px;
        -webkit-animation: dots 4s ease infinite 1s;
        animation: dots 4s ease infinite 1s;
      }
      .dots div {
        position: relative;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 100%;
        background-color: black;
      }
      .dots div:nth-child(1) {
        width: 0px;
        height: 0px;
        margin: 5px;
        margin-right: 15px;
        -webkit-animation: show-dot 4s ease-out infinite 1s;
        animation: show-dot 4s ease-out infinite 1s;
      }
      .dots div:nth-child(4) {
        background-color: transparent;
        -webkit-animation: dot-fall-left 4s linear infinite 1s;
        animation: dot-fall-left 4s linear infinite 1s;
      }
      .dots div:nth-child(4):before {
        position: absolute;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 100%;
        background-color: black;
        content: "";
        -webkit-animation: dot-fall-top 4s cubic-bezier(0.46, 0.02, 0.94, 0.54)
          infinite 1s;
        animation: dot-fall-top 4s cubic-bezier(0.46, 0.02, 0.94, 0.54) infinite
          1s;
      }

      @-webkit-keyframes dots {
        0% {
          left: -10px;
        }
        20%,
        100% {
          left: 10px;
        }
      }

      @keyframes dots {
        0% {
          left: -10px;
        }
        20%,
        100% {
          left: 10px;
        }
      }
      @-webkit-keyframes show-dot {
        0%,
        20% {
          width: 0px;
          height: 0px;
          margin: 5px;
          margin-right: 15px;
        }
        30%,
        100% {
          width: 10px;
          height: 10px;
          margin: 0px;
          margin-right: 10px;
        }
      }
      @keyframes show-dot {
        0%,
        20% {
          width: 0px;
          height: 0px;
          margin: 5px;
          margin-right: 15px;
        }
        30%,
        100% {
          width: 10px;
          height: 10px;
          margin: 0px;
          margin-right: 10px;
        }
      }
      @-webkit-keyframes dot-fall-left {
        0%,
        5% {
          left: 0px;
        }
        100% {
          left: 200px;
        }
      }
      @keyframes dot-fall-left {
        0%,
        5% {
          left: 0px;
        }
        100% {
          left: 200px;
        }
      }
      @-webkit-keyframes dot-fall-top {
        0%,
        5% {
          top: 0px;
        }
        30%,
        100% {
          top: 50vh;
        }
      }
      @keyframes dot-fall-top {
        0%,
        5% {
          top: 0px;
        }
        30%,
        100% {
          top: 50vh;
        }
      }
    `}</style>
  </div>
);

export default Error;
