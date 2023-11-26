import React, { useState } from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByUser } from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<string>("2");

  return (
    <div>
      <div className="counter-wrapper">
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <span className="counter">{count}</span>
        <div>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
      <div className="counter-amount-wrapper">
        <input
          placeholder={incrementAmount}
          value={incrementAmount}
          onChange={(e: any) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByUser(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
