'use client'
import { useEffect, useState } from 'react';

const ColorChangingSquare = () => {
  const [currentColor, setCurrentColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor(getRandomColor());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const squareStyle = {
    width: '400px',
    height: '400px',
    backgroundColor: currentColor,
  };

  return <div style={squareStyle}></div>;
};

export default ColorChangingSquare;
