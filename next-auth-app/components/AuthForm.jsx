"use client";

import Link from "next/link";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function AuthForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

  // const [formState, formAction] = useActionState(signup, {});
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token } = await response.json();
    localStorage.setItem("token", token);
    router.push("/protected");
  };
  return (
    <>
      <div className="row">
        <div className="col-8 offset-2">
          <h1 className="text-center">Registration Form</h1>

          {/* {formState &&
            formState.errors &&
            Object.keys(formState.errors).map((error) => (
              <p className="alert alert-danger" key={error}>
                {formState.errors[error]}
              </p>
            ))} */}

          <form onSubmit={submitHandler}>
            {/* email */}
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

            {/* password */}
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder=""
                ref={passwordRef}
              />
              <label htmlFor="password">Password</label>
            </div>
            {/* button */}
            <div className="row">
              <div className="col-6 offset-3">
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Create User
                  </button>
                </div>
              </div>
            </div>
            <Link href="/">Registered User, Login here</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
