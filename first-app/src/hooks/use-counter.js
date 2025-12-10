import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => setCounter(counter + 1);

  const decrese = () => setCounter(counter - 1);

  const reset = () => setCounter(initialValue);

  return [counter, increase, decrese, reset];
}

// HoC : Higher Order Components (class based component)
