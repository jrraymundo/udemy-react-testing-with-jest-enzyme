import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)

  return (
    <div data-test='component-counter'>
        <h1 data-test='counter-display'>
            The counter is currently&nbsp;
            <span data-test='count'>{count}</span>
        </h1>
        <button data-test='increment-button' onClick={() => setCount(prevCount => prevCount + 1)}>
            Increment Button
        </button>
        <button data-test='decrement-button' onClick={() => setCount(prevCount => prevCount - 1)}>
            Increment Button
        </button>
    </div>
  );
}
