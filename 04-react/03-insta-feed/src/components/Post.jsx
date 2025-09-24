import React, { useState } from 'react'
import '../styles/post.css'

const Post = (props) => {
// console.log(props)
  
    const [likes,setLikes] = useState(0)

    function handleLikes() {
      setLikes(likes+1)
      console.log(likes)
    }

    return (
      <div className='feed'>
      <img className='profilePhoto' src={props.image}/>
      <h2>{props.name}</h2>
      <button
      onClick={handleLikes}
      >💗 Like ({likes})</button>
      </div>
    )
}

export default Post