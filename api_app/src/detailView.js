/* eslint-disable */

import React from 'react';

function DetailView({detail, followers, following, setVisible}) {

  return (
    <div className="bio-card">
      <div display="inline-block"><img src={detail.avatar_url} alt="face" width="150" height="150" /></div>
      <div>{detail.name} ({detail.login})</div>
      <div>{detail.location}</div>
      <div >{detail.bio}</div>
      <div>Followers: {detail.followers}</div>
      <div>Folowing: {detail.following}</div>
      <button id="closeBtn" onClick={()=> {setVisible(false)}} float="right">X</button>
    </div>
  )

}

export default DetailView;