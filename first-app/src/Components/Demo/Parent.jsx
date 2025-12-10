import { useCallback, useMemo } from "react";
import Child from "./Child";
import useFetchData from "../../hooks/use-fetch";
import { useToggle } from "../../hooks/use-toggle";

function Parent() {
  const [toggle, flipToggle] = useToggle(false);
  const [show, flipShow] = useToggle(false);

  const [data] = useFetchData("https://jsonplaceholder.typicode.com/users");
  console.log("Parent Data : ", data);
  console.log("Parent renders");

  const dummyFunction = useCallback(
    () => console.log("Dummy Function called", toggle),
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
      <button onClick={flipToggle} className="btn btn-primary">
        Toggle
      </button>

      <button className="btn btn-secondary" onClick={flipShow}>
        Show/Hide
      </button>

      {show && <p>Show is true now</p>}
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
