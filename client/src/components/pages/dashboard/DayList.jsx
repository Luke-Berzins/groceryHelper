export default function DayList() {
  let dayList = []
  let today = new Date() 
  for (let i = 0; i < 13; i++) {
    const month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let calandar = new Date(today.setDate(today.getDate() + 1 ))
    dayList.push(month[calandar.getMonth()] + ' ' + calandar.getDate()) 
  }



  return dayList.map(day => {
    return <div>{day}</div> 
  })
}