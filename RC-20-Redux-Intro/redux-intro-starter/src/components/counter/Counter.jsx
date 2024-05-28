import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
import { down, remove, up } from "../../store/ counterReducer";

const Counter = () => {
  //? Global state'den veri okumak için useSelector hook'u kullanılır.

  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);
  const token = useSelector((state) => state.token);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "UP" })}>
          onClick={() => dispatch({ type: up })}>
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch({ type: remove })}>
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch({ type: down })}>
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
