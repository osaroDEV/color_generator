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
      <main>
        <h3 className="center">Color Generator</h3>
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
      </main>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {list.map((color, index) => {
          return <UnitColor key={index} color={color} index={index} />;
        })}
      </div>
      <footer className="center">
        <h5>&copy;2021 osaroDEV</h5>
      </footer>
    </>
  );
}

export default App;
