import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListView from './listView';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get", 
      url: "https://api.github.com/repos/facebook/react/contributors"
    })
    .then((res) => {
      setData(res.data);
    })

  }, []);  

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>The React Team</h2>
      </div>
      <ListView data={data} />
    </div>
  );
}

export default App;
