import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Search, Loader, AlertCircle } from 'lucide-react';
import UserCard from './components/UserCard';

import './styles/App.css'
import { useMemo } from 'react';


const App = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0)
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    const hitAPI = async () => {
      try {
        const { data } = await axios.get(url);
        //console.log(data);
        setUsers(data);
        setLoading(false)
      } catch (error) {
       // console.log("This is the error:", error);
         setLoading(false)
         setError(error.message)
      }
    };
    hitAPI()
  }, []);

  //  <button onClick={()=> setCounter(counter+1)}>Counter : {counter}</button>


const filteredUsers= useMemo(() => 
    users.filter(user => {
    console.log('Filter ran! Current search:', search);
   return user.name.toLowerCase().includes(search.toLowerCase())
})
,[users,search]) 



  if(loading) return (
    <div className='loading-text'>
      <Loader className="animate-spin" size={50}/>
      <p>Loading users...</p>
    </div>
  )


 if (error) return (
    <div className="error-text">
      <AlertCircle size={24} />
      <p>Error: {error}</p>
    </div>
  );
  

  return (
    <div className="app-container">
      <h1 className="app-title">Users Dashboard</h1>
      <div className="search-container">
         <Search className="search-icon" size={20}/>
         <input 
         type='text'
         placeholder='Search by name...'
         value={search}
         onChange={e => setSearch(e.target.value)}
           className="search-input"
         />
      </div>
      <div className="users-grid">
        {
          filteredUsers.map(user => (
            <UserCard user={user} key={user.id} />
          ))
        }
      </div>
    </div>
  )
}

export default App