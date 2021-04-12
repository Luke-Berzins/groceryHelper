import React  from 'react'
import DayItem from './DayItem'

export default function DayList() {
  

  let dayList = []
  let today = new Date()
  const tomorrow = new Date(today)

  const dayGenerator = () => {
    for (let i =0; i < 31; i++) {
       tomorrow.setDate(tomorrow.getDate() + 1)
       dayList.push(tomorrow.toDateString().substr(0, 10))
    }
    console.log('ran')
  }

  dayGenerator()


  return dayList.map((day, index) => {
    return <DayItem
            key={index}
            dayTitle={day}
          />
    
    
  })
}