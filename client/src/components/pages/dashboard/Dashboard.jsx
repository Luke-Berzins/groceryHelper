import React from 'react'
import SideNav from './SideNav'
import Schedule from './Schedule'
import './Dashboard.scss'



export default function Dashboard(props) {
  return (
    <div>
      <div className="dashboard">
        <div className="sideNav">
          <SideNav />
        </div>
        <div className="schedule">
          <Schedule />
        </div>
      </div>
    </div>
  )
}