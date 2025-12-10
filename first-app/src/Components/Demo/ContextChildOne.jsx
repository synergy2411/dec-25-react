import AuthContext from "../../context/auth-context";

function ContextChildOne() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <>
            <h2>Context Child One Component</h2>
            <button
              className="btn btn-primary"
              onClick={() => context.setIsLoggedIn(!context.isLoggedIn)}
            >
              {context.isLoggedIn ? "Logout" : "Login"}
            </button>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default ContextChildOne;
