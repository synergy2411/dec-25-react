import { useState, useCallback, useMemo } from "react";
import Child from "./Child";
import useFetchData from "../../hooks/use-fetch";

function Parent() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const [data] = useFetchData("https://jsonplaceholder.typicode.com/users");
  console.log("Parent Data : ", data);
  console.log("Parent renders");

  const dummyFunction = useCallback(
    () => console.log("Dummy Function called"),
    [toggle]
  );

  //   const dummyFunction = useMemo(
  //     () => () => console.log("Dummy Function called"),
  //     [toggle]
  //   );

  const friends = useMemo(() => ["Monica", "Ross", "Rachel", "Joey"], []);
  const response = useMemo(() => {
    return { message: "SUCCESS" };
  }, []);

  // const memoizedCallbackValue = useMemo(() => () => console.log("The Returned Function"), [])

  return (
    <>
      <h1>Parent Component</h1>
      <button onClick={() => setToggle(!toggle)} className="btn btn-primary">
        Toggle
      </button>

      <button className="btn btn-secondary" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      <Child
        toggle={true}
        dummyFunction={dummyFunction}
        friends={friends}
        response={response}
      />
    </>
  );
}

export default Parent;
