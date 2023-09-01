import React, { useState } from 'react';

function Approval() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  const handleStoreData = () => {
    const data = {
      value1,
      value2,
      value3,
    };
    localStorage.setItem('myData', JSON.stringify(data));
  };

  const handleViewData = () => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log(parsedData); // You can display this data however you like
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <input
        type="text"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <button onClick={handleStoreData}>Store Data</button>
      <button onClick={handleViewData}>View Data</button>
    </div>
  );
}

export default Approval;
