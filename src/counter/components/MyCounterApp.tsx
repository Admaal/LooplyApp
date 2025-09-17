import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>counter: {counter}</h1>
      <div>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+1</button>
      </div>
    </div>
  );
};
