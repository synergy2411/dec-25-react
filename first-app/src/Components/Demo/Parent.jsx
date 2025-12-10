import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  console.log("Parent renders");

  const dummyFunction = useCallback(
    () => console.log("Dummy Function called"),
    [toggle]
  );

  return (
    <>
      <h1>Parent Component</h1>
      <button onClick={() => setToggle(!toggle)} className="btn btn-primary">
        Toggle
      </button>

      <button className="btn btn-secondary" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      <Child toggle={true} dummyFunction={dummyFunction} />
    </>
  );
}

export default Parent;
