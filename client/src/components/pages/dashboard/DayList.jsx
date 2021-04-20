import React  from 'react'
import DayItem from './DayItem'

export default function DayList() {
  

  let dayList = []
  let today = new Date()
  const tomorrow = new Date(today)

  
  for (let i =0; i < 31; i++) {
     tomorrow.setDate(tomorrow.getDate() + 1)
     dayList.push(tomorrow.toDateString().substr(0, 10))
  }
    


  return dayList.map((day, index) => {
    return <DayItem
            key={index}
            dayTitle={day}
          />
    
    
  })
}