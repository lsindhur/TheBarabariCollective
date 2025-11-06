import React from 'react'
import '../styles/Home.css'
import {useAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'

const Home = () => {
    const {user} = useAuth()

  return (
    <div className='home-container'>
      <div className="hero-section">
        <h1>Citizen Resolution System</h1>
         <p className="hero-subtitle">
          Report and track community issues efficiently. Your voice matters.
        </p>


        {
          user? 
          <div className="welcome-message">Welcome back, {user}</div>
          :
          <div className="cta-buttons">
            <Link to='/login' className="cta-btn primary">Login</Link>
            <Link to='/register' className="cta-btn secondary">Register</Link>
          </div>
        }


        {
          user &&
          <section className="features-section">
                <h2>Quick Actions</h2>
                <div className="features-grid">
                  <div className="feature-card">
                     <div className="feature-icon">📝</div>
                      <h3>Submit Complaint</h3>
                      <p>Report a new issue in your community</p>
                      <button className="feature-link">Submit Now</button>
                  </div>

                  <div className="feature-card">
                     <div className="feature-icon">📊</div>
                      <h3>My Complaints</h3>
                      <p>Track the status of your submitted complaints</p>
                      <button className="feature-link">View Complaints</button>
                  </div>

                </div>
          </section>
        }


        {
          !user &&
          <section className="features-section">
             <h2>How It Works</h2>
             <div className="steps-grid">
                <div className="step">
                   <div className="step-number">1</div>
                   <h4>Register</h4>
                   <p>Create your account as a citizen</p>
                </div>

                <div className="step">
                   <div className="step-number">2</div>
                    <h4>Submit</h4>
                     <p>Report issues with details and photos</p>
                </div>
                
                <div className="step">
                   <div className="step-number">3</div>
                    <h4>Track</h4>
                    <p>Monitor progress and status updates</p>
                </div>
             </div>
          </section>
        }

        {
          !user &&
          <div className="cta-section">
              <h2>Ready to Get Started?</h2>
               <p>Join our community and help make a difference</p>
               <div className="cta-buttons">
                <Link to='/register' className="cta-btn primary">Create Account</Link>
                <Link to='/login' className="cta-btn secondary">Sign in</Link>
               </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Home