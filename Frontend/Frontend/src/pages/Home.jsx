// import { useState } from 'react'
// import { useEffect } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/test")
      .then((res) => setData(res.data.message))
      .catch(() => setData("could not connect to backend"));
  }, []);
  return (
    <>
      <h1>CLinic website</h1>
      <p>Backend says: {data}</p>
    </>
  );
};

export default Home;
