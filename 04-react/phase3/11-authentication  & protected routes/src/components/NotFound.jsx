import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="center-page">
        <div className='error'>
      <h2>Page not found</h2>
      <p>
        Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.
      </p>
      <Link to="/">Go back to Home</Link>
    </div>
    </div>
  )
}

export default NotFound