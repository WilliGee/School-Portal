import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
return (
  <div className = 'NavigationBar'>
      <div className='p-3 rounded w-100'>
          <h2>Welcome to Moringa School!</h2>
    <div class="navbars">
        <ul>
        <li>
           <Link to = '/'>Home</Link>
        </li>
        <li>About</li>
        <li>Courses</li>
        <li>Contact</li>
        <li>
            <Link to= '/login'>Login</Link>
        </li>
        </ul>
    </div>
      </div>
  </div>
)
}

export default NavigationBar;
