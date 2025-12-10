import ContextChildOne from "./ContextChildOne";
import ContextChildTwo from "./ContextChildTwo";

function ContextParent() {
  return (
    <>
      <h1>Context Parent Component</h1>

      <ContextChildOne />
      <hr />

      <ContextChildTwo />
    </>
  );
}

export default ContextParent;
