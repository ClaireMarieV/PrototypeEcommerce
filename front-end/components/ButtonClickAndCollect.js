import { useStore } from "../lib/store";

const ButtonClickAndCollect = ({ order }) => {
  const addClickAndCollect = useStore((state) => state.addClickAndCollect);

  return (
    <div>
      <button
        className="collect-button"
        onClick={() => addClickAndCollect(order)}
      >
        Click and Collect
      </button>
      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          font-weight: 600;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
export default ButtonClickAndCollect;
