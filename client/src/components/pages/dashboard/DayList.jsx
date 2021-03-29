export default function DayList() {
  let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday']
  let today = new Date()



  return dayList.map(day => {
    return <div>{today.toString()}</div> 
    
    
  })
}