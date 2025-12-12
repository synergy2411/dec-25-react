"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProtectedPage() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.key("token")) {
      router.replace("/");
    }
  }, []);

  const fetchHandler = async () => {
    const response = await fetch("/api/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `beaer ${localStorage.getItem("token")}`,
      },
    });
    const todos = await response.json();
    console.log("TODOS : ", todos);
  };

  return (
    <>
      <h1>Protected Resource</h1>
      <button className="btn btn-primary" onClick={fetchHandler}>
        Fetch Resources
      </button>
    </>
  );
}

export default ProtectedPage;
