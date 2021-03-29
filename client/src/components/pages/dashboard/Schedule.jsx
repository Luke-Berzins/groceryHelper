import React, { useState } from 'react'
import DayList from './DayList'
import './Schedule.scss'


export default function Schedule(props) {
  const [currentDate, setCurrentDate] = useState();
  
  let today = new Date();

  
  

  return (


    <div>
      < DayList />
    </div>
  )
}