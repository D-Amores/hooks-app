

import React, { useState } from 'react'

const useCounter = ( initialValue: number = 1) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    if (counter <= 1) return;
    setCounter(counter - 1);
  }

  return {

    // properties
    counter,

    // methods
    increment,
    decrement,
  }
}

export default useCounter
