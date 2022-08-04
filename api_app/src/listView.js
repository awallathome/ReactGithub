import React from 'react';
import './App.css';
import DetailView from './detailView';
// import axios from 'axios';

// const [followers, setFollowers] = useState();
// const [following, setFollowing] = useState();

function card(item) {

  console.log("card called");
  
  // axios({
  //   method: "get", 
  //   url: `https://api.github.com/users/${item.login}/followers`
  // })
  // .then((res) => {
  //   console.log("follower called", res)
  // })
  
  // axios({
  //   method: "get", 
  //   url: `https://api.github.com/users/${item.login}/following`
  // })
  // .then((res) => {
  //   console.log("following called", res)

  // })
  // getFollowers(item);
  // getFollowing(item);
  return (
    <DetailView detail={item} />
  )
}

// function getFollowers(item){
//   axios({
//     method: "get", 
//     url: `https://api.github.com/users/${item.login}/followers`
//   })
//   .then((res) => {
//     console.log("follower called", followers)
//     setFollowers(res.data);

//   })
// }

// function getFollowing(item){
//   axios({
//     method: "get", 
//     url: `https://api.github.com/users/${item.login}/following{/other_user}`
//   })
//   .then((res) => {
//     console.log("following called", following)
//     setFollowing(res.data);

//   })
// }

function ListView({data}) {
    return  (
      <div>
        <ul class="no-bullets">
        {data.map(item => (
          <li class="no-bullets" onClick={card(item)}>
            <div><img src={item.avatar_url} alt="face" width="50" height="50"/></div>
            <div>{item.login}</div>
            <div>{item.contributions}</div>
          </li>

        ))}
      </ul>
        <ul class="no-bullets">
          {data.map(item => (
            <li class="no-bullets" onClick={card(item)}>
              <div><img src={item.avatar_url} alt="face" width="50" height="50"/></div>
              <div>{item.login}</div>
              <div>{item.contributions}</div>
            </li>

          ))}
        </ul>
      </div>
    )
  };

  export default ListView;