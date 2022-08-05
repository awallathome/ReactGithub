import React, { useState } from 'react';
import './App.css';
import DetailView from './detailView';
import axios from 'axios';

function ListView({ data }) {

  const [user, setUser ] = useState("")
  const [isLoading, setIsLoading] = useState(true);
 
  function getUserDetail(item) {
    axios({
      method: "get",
      url: `https://api.github.com/users/${item.login}`
    })
      .then((res) => {
        // console.log("user", res.data)
        setUser(res.data)
       
      })
      .then(()=>{
        setIsLoading(false);
      })

  }

  function openDetail(item) {
    setUser(item);
    getUserDetail(item);
  }
 
  return (
    <div>
      {!isLoading ? <DetailView detail={user} setIsLoading={setIsLoading}/> : null}
      <table id="contributors">
        <tr border-bottom="solid 2px" border-color="black" >
          <th>Avatar</th>
          <th>Login</th>
          <th># Contributions</th>
        </tr>
        {data.map(item => (
          <tr onClick={() => openDetail(item)}>
            <th className="header-column" ><img src={item.avatar_url} alt="face" width="50" height="50" /></th>
            <th >{item.login}</th>
            <th >{item.contributions}</th>
          </tr>
        ))}
      </table>
      
    </div>
  )
};

export default ListView;