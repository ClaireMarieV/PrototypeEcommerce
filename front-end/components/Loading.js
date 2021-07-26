const Loading = () => (
  <div className="loading">
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
        100% {
          transform: scale(0.1);
          opacity: 0;
        }
      }
      div {
        background-color: #e6c2a2;
        border-radius: 50%;
        margin: auto;
        width: 200px;
        height: 200px;
      }

      div:nth-child(1) {
        animation: pulse 1.5s infinite;
      }
      div:nth-child(2) {
        animation: pulse 1.5s infinite 0.3s;
      }
    `}</style>
  </div>
);

export default Loading;
