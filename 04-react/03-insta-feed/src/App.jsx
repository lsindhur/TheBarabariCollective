import React from 'react'
import './App.css'
import Post from './components/Post.jsx'
import board1 from './images/board1.png'
import img13 from './images/img13.jpeg'
import img17 from './images/img17.jpeg'

const App = () => {
/*   return (
    <div className='container'>
      <h1>Mini Image Feed</h1>
      <Post
      name = "Sindhura"
      image = {img17}
      />
      <Post
      name = "Asiya"
      image = {img13}
      />
      <Post
      name = "Saniyya"
      image = {board1}
      />
    </div>
  ) */
    

    return(
      
      <div>
        <h1>Mini Image Feed</h1>
        <Post 
        image = {img13}
        name = "Sindhura"
        />
        <Post 
        image = {img17}
        name = "Asiya"
        />
        <Post 
        image = {board1}
        name = "Saniyya"
        />
      </div>
    )

}

export default App