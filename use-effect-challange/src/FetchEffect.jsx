import React, { useEffect, useState } from "react";

const FetchEffect = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setDatas(data);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Data From API</h1>
      <ul>
        {datas.map((data, index) => (
          <li key={index}>
            <h3>{data.title}</h3>
            <p> {data.body} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchEffect;
