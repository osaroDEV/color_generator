import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UnitColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);
  const { hex, weight } = color;
  let nHex = `#${hex}`;
  console.log(hex);
  console.log(nHex);
  console.log(index);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <>
      <div
        className={`cont ${index > 9 && 'light'}`}
        style={{ backgroundColor: nHex }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(nHex);
        }}
      >
        <h1>{weight}%</h1>
        <button className="hex-btn">{nHex}</button>
        {alert && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            copied to clipboard
          </motion.p>
        )}
      </div>
    </>
  );
};

export default UnitColor;
