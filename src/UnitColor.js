import React, {useState, useEffect} from 'react';

const UnitColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false)
  const { hex, weight } = color;
  let nHex = `#${hex}`;
  console.log(hex);
  console.log(nHex);
  console.log(index);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false)
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  },[alert])

  return (
    <div className={`cont ${index > 10 && 'light'}`} style={{ backgroundColor: nHex }}
      onClick={() => {
        setAlert(true)
      navigator.clipboard.writeText(nHex)
    }}>
      <h1>{weight}%</h1>
      <h1>{nHex}</h1>
      {alert && <p>copied to clipboard</p>}
    </div>
  );
};

export default UnitColor;
