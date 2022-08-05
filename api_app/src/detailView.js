import React from 'react';

function DetailView({detail, setIsLoading}) {


  return (
    <div className="bio-card">
      <div>
        <a href="#" id="closeBtn" onClick={()=> {setIsLoading(true)}} >x</a>
      </div>
      <div display="inline-block"><img src={detail.avatar_url} alt="face" width="150" height="150" /></div>
      <div>{detail.name} ({detail.login})</div>
      <div>{detail.location}</div>
      <div >{detail.bio}</div>
      <div>Followers: {detail.followers}</div>
      <div>Folowing: {detail.following}</div>
      <a href={detail.html_url} target="_blank">{detail.html_url}</a>
      
    </div>
  )

}

export default DetailView;