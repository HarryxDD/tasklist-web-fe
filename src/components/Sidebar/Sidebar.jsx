import React from 'react'
import './Sidebar.css'
import { BsListTask, BsCalendarDate, BsCalendarWeek, BsGrid } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
        <ul className='app__sidebar-menu'>
            <li className='sidebar-task'>
                <BsListTask />
                Tasks
            </li>
            <li className='sidebar-today'>
                <BsCalendarDate />
                Today
            </li>
            <li className='sidebar-upcoming'>
                <BsCalendarWeek />
                Upcoming
            </li>
            <li className='sidebar-filter'>
                <BsGrid />
                Filters
            </li>
        </ul>
    </div>
  )
}

export default Sidebar