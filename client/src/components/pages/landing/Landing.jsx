import React, { useState } from 'react'
import './Landing.scss'

export default function Landing(props) {
  let [currentDate, setCurrentDate] = useState();

  return (
    <div>
      <nav>
        <p>Hello</p>
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