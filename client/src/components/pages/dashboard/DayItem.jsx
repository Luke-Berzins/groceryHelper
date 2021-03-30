import './DayItem.scss'


export default function DayItem(props) {


  return (
    <div className="dayItem">
      <h2 className="dayDate">{props.date}</h2>
      <p>recipe x</p>
    </div>
  )
}