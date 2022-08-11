import React from 'react';

function DetailView({detail, setIsLoading}) {

  const styles={
    closeBtn: {
      color:'black',
      width: '10px',
      float: 'right',
      'text-decoration': 'none',
    },
    'bio-card': {
      'box-shadow': '0 8px 8px 0 rgba(0, 0, 0, .2)',
      'background-color': 'rgb(199, 122, 122)',
      padding: '15px',
      height: 'flex',
      width: 'flex',
      display: 'block',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', 
    },
    avatar: {
      width: '200px',
      height: '200px'
    },
    avatarDiv: {
      display: 'inline-block'
    }
  }

  return (
    <div style={styles['bio-card']}>
      <div>
        <a href="#" style={styles.closeBtn} onClick={()=> {setIsLoading(true)}} >X</a>
      </div>
      <div style={styles.avatarDiv}><img src={detail.avatar_url} alt="face" style={styles.avatar} /></div>
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