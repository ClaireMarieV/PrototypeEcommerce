const Loading = () => (
  <div className="loading">
    <div></div>
    <div></div>
    <style jsx>{`
      @keyframes pulse {
        0% {
          transform: scale(0.1);
          opacity: 0;
        }
        25% {
          transform: scale(0.3);
          opacity: 0.5;
        }
        50% {
          opacity: 1;
        }
        75% {
          transform: scale(1.3);
          opacity: 0.5;
        }
        100% {
          transform: scale(1.6);
          opacity: 0;
        }
      }
      div {
        background-color: black;
        border-radius: 50%;
        position: absolute;
        margin: auto auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 200px;
        height: 200px;
      }

      div:nth-child(1) {
        animation: pulse 2s infinite;
      }
      div:nth-child(2) {
        animation: pulse 2s infinite 0.3s;
      }
    `}</style>
  </div>
);

export default Loading;
