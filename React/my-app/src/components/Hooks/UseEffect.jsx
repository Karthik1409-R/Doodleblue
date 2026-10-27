import React, { use } from 'react';
import { useEffect, useState } from 'react';

function UseEffect() {
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if(seconds < 0) return;
    const timerId = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [seconds]);
  

  return (
    <>
      <p>{seconds > 0 ? seconds : "Times Up!"}</p>
    </>
  )
}

export default UseEffect
