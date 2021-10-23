import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [num, setNum] = useState(0);

  const inc_num = () => {
    setNum(num + 1);
  };
  const dec_num = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('number less than 0 will not be shown');
      setNum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="but_div">
            <button onClick={inc_num}>Increament</button>
            <button onClick={dec_num}>Decreament</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
