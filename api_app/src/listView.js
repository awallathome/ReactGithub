import React, { useState } from 'react';
import './App.css';
import DetailView from './detailView';
import axios from 'axios';

function ListView({ data }) {

  const [user, setUser ] = useState("")
  const [isLoading, setIsLoading] = useState(true);

  const styles = {
    avatar: {
      width: '50px',
      height: '50px',
    },
    headerColumn: {
      width: '33%',
    },
    contributors: {
      width:'100%',
    }
  }
 
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
      <table style={styles.contributors}>
        <tr >
          <th>Avatar</th>
          <th>Login</th>
          <th># Contributions</th>
        </tr>
        {data.map(item => (
          <tr onClick={() => openDetail(item)}>
            <th style={styles.headerColumn} ><img src={item.avatar_url} alt="face" style={styles.avatar} /></th>
            <th >{item.login}</th>
            <th >{item.contributions}</th>
          </tr>
        ))}
      </table>
      
    </div>
  )
};

export default ListView;