import React from 'react'
import './style.css'

const NavigationBar = () => {
return (
  <div className = 'NavigationBar'>
      <div className='p-3 rounded w-100'>
          <h2>Welcome to Moringa School!</h2>
    <div class="navbars">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Contact</li>
        <li>Login</li>
        </ul>
    </div>
      </div>
  </div>
)
}

export default NavigationBar;
