import React, { useState } from 'react';
import './index.css';
import UnitColor from './UnitColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#fed700').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? 'error' : null}`}
            type="text"
            placeholder="#fed700"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>
      <div
        style={{
          height: '50vh',
          width: '100vw',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {list.map((color, index) => {
          return <UnitColor key={index} color={color} />;
        })}
      </div>
    </>
  );
}

export default App;
