import React from 'react'
import './Explore.css'

const Explore = () => {
  return (
    <div className='home__explore'>
        <h2>Explore</h2>
        <ul className='home__explore-items'>
            <li className='explore__item-task'>
                Tasks
            </li>
            <li className='explore__item-today'>
                Today
            </li>
            <li className='explore__item-upcoming'>
                Upcoming
            </li>
            <li className='explore__item-filter'>
                Filter
            </li>
        </ul>
    </div>
  )
}

export default Explore