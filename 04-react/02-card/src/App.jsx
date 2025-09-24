import React from 'react'
import Post from './components/Post.jsx'
import board1 from './images/board1.png'
import img13 from './images/img13.jpeg'
import img17 from './images/img17.jpeg'

const App = () => {
  return (
    <div>
        <h1>Mini Image Feed</h1>
        <Post 
        image = {img17}
        name='Sindhura'
        />
         <Post 
         image = {img13}
         name='Saniyya'
         />
          <Post 
          image = {board1}
          name='Asiya'
          />
    </div>
  )
}

export default App

