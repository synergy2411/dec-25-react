import { useCounter } from "../../hooks/use-counter";

function Counter() {
  const [counter, increase] = useCounter();

  if (counter > 3) {
    throw new Error("Too high value for counter");
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button className="btn btn-primary" onClick={increase}>
        +
      </button>
    </>
  );
}

export default Counter;
