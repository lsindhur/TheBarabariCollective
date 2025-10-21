import React from 'react'
import '../styles/Search.css'
import { useState } from 'react'

const Search = ({searchUsers}) => {
  const [username,setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    searchUsers(username)
  }


  return (
    <div className='search-container'>
        <form className='search-form' onSubmit={handleSubmit}>
            <input
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            ></input>
            <button className='btn btn-dark'>Submit</button>
        </form>
    </div>
  )
}

export default Search