import React from 'react';

export default function Counter() {
  return (
    <div data-test="component-counter">
        <h1 data-test='counter-display'>The counter is currently</h1>
        <button data-test='counter-button'>Increment Button</button>
    </div>
  );
}
