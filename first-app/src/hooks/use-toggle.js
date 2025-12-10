import { useState } from "react";

export function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);

  const flip = () => setToggle(!toggle);

  return [toggle, flip];
}
