import React from 'react'
import DayItem from './DayItem'
import './DayList.scss'


export default function DayList() {
  let dayList = []
  let today = new Date() 
  let currentMonth;
  for (let i = 0; i < 365; i++) {
    const month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let calandar = new Date(today.setDate(today.getDate() + 1 ))
    if (calandar.getMonth() !== currentMonth) {
      currentMonth = calandar.getMonth()
      dayList.push(month[calandar.getMonth()] + ' ' + calandar.getDate()) 
    } else {
      dayList.push(calandar.getDate()) 
    }
  }



  return (
      <div className="dayItemHolder">
        {dayList.map(day => {
          return <DayItem 
                  date={day}
                  /> 
                
        })}
      </div>
  )
  
  
}