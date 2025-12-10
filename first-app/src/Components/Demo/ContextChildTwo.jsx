import { useContext } from "react";
import AuthContext from "../../context/auth-context";

function ContextChildTwo() {
  const context = useContext(AuthContext);
  return (
    <>
      <h2>Context Child Two Component</h2>
      {context.isLoggedInContext && <p>Protected Resource</p>}
    </>
  );
}

export default ContextChildTwo;
