import { describe, test, expect } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("useCounter", () => {
  test("should initialize with default value ", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(5);
  });

  test("should initialize with value 10 ", () => {
    const initialValue = 10;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.counter).toBe(initialValue);
  });

  test("should increment counter when HandleAdd is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(6);
  });

  test("should decrement counter when HandleSubtract is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(4);
  });

  test("should reset to initial value when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleSubtract();
    });
    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(5);
  });
});
