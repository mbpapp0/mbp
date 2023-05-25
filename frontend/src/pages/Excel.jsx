import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

export default function Excel() {
  const [jsonData, setJsonData] = useState(null);

  const getData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    setJsonData(json);
    console.log(json);
  }

  const submit = () => {
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(jsonData);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet One');

    XLSX.writeFile(wb, 'DocOne.xlsx')
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
        <h2>Excel</h2>
      <button onClick={submit}>Convert to XSLX</button>
    </div>
  );
}
