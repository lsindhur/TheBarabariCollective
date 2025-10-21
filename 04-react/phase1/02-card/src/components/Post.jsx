import React from 'react'
import { useState } from 'react';

const Post = (props) => {
    //console.log(props)

    const [likes, setLikes] = useState(0)

    //let likes = 0;
    function handleLikes() {
        //likes+=1;
        setLikes(likes+1)
        console.log(likes)
    }

  return (
    <div>
        <img src={props.image}></img>
        <h2>{props.name}</h2>
        <button onClick={handleLikes}>💗 Like({likes})</button>
    </div>
  )
}

export default Post