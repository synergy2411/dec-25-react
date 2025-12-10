import { memo } from "react";
import useFetch from "../../hooks/use-fetch";
import { useCounter } from "../../hooks/use-counter";

function Child({ toggle }) {
  console.log("Child renders");

  const [counter, increase, decrease, reset] = useCounter(10);

  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) {
    console.log("Loading");
  }
  if (!loading) {
    console.log("Data : ", data);
  }

  return (
    <>
      <h2>Child Component</h2>
      {toggle && <p>The paragragh in the child component</p>}

      <h2>Counter : {counter}</h2>
      <button onClick={increase}>Incarese</button>
      <button onClick={decrease}>Decarese</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default memo(Child);

// memo() : unable to figure out the referential equality
// Props Equality check (prevProps.value === currProps.value)
