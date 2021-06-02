const Loading = () => (
  <div className="loading">
    <div className="dots">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <style jsx>{`
      .dots span {
        width: 96px;
        height: 96px;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #9fb3d3;
        border-radius: 64px;
        animation: spin 1s ease infinite;
      }

      span:nth-child(1) {
        opacity: 0.2;
        animation-delay: 0.4s;
      }

      span:nth-child(2) {
        opacity: 0.4;
        animation-delay: 0.3s;
      }

      span:nth-child(3) {
        opacity: 0.6;
        animation-delay: 0.2s;
      }

      span:nth-child(4) {
        opacity: 0.8;
        animation-delay: 0.1s;
      }

      span:nth-child(5) {
        opacity: 1;
        animation-delay: 0s;
      }

      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Loading;
