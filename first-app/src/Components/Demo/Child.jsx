import { memo } from "react";

function Child({ toggle }) {
  console.log("Child renders");

  return (
    <>
      <h2>Child Component</h2>
      {toggle && <p>The paragragh in the child component</p>}
    </>
  );
}

export default memo(Child);

// memo() : unable to figure out the referential equality
// Props Equality check (prevProps.value === currProps.value)
