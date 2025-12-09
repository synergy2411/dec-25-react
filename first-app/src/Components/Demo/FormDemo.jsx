import { useRef, useState } from "react";

function FormDemo() {
  const usernameRef = useRef();

  const [password, setPassword] = useState("");
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("Username : ", usernameRef.current.value);
    console.log("Password : ", password);
  };

  console.log("Form Demo Comp");

  const passwordBlurHandler = () => {
    if (password.trim() === "") {
      setPasswordIsInvalid(true);
      return;
    }
    if (password.trim().length < 6) {
      setPasswordIsInvalid(true);
      return;
    }
    setPasswordIsInvalid(false);
  };

  return (
    <form>
      {/* username : uncontrolled (email, required) */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          placeholder=""
          ref={usernameRef}
        />
        <label htmlFor="username">Username</label>
      </div>

      {/* password - controlled (6 characters, required) */}
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={passwordBlurHandler}
        />
        <label htmlFor="password">Password</label>

        {passwordIsInvalid && (
          <p className="alert alert-danger">Password is invalid</p>
        )}
      </div>

      <button className="btn btn-primary" onClick={clickHandler}>
        Submit
      </button>
    </form>
  );
}

export default FormDemo;
