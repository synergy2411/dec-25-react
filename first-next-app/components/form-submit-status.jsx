"use client";
import { useFormStatus } from "react-dom";

function FormSubmitStatus() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-primary">
      {pending ? "Submitting..." : "Share"}
    </button>
  );
}

export default FormSubmitStatus;
