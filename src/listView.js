import React from 'react';
import DetailView from './detailView';
import axios from 'axios';

// const [followers, setFollowers] = useState();
// const [following, setFollowing] = useState();

function card(item) {

  console.log("card called");
  
  axios({
    method: "get", 
    url: `https://api.github.com/users/${item.login}/followers`
  })
  .then((res) => {
    console.log("follower called", res)
  })
  
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
      <ul>
        {data.map(item => (
          <li onClick={card(item)}>
            <div>user: {item.login}</div>
            {/* <div></div>
            <div></div>
            <div></div> */}
          </li>

        ))}
      </ul>
    )
  };

  export default ListView;