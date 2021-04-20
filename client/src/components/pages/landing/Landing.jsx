import React from 'react'
import {
  Link
} from 'react-router-dom'
import './Landing.scss'

export default function Landing(props) {


  return (
    <div>
      <nav>
        <p>Hello</p>
        <Link to="/dashboard">dashboard</Link>
      </nav>


      <body>

          <div>
            <div className="hero"> 
                 <img src='./images/landing/landingGroceries.jpeg' alt='hero' className='landingMainPicture'/>
              <div className="heroOverlay">
              </div>
            </div>
          </div>

      </body>
    </div>
  )
  
}