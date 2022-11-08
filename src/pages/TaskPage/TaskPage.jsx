import React from 'react'
import { Task } from '../../components'
import {BsCalendarDate} from 'react-icons/bs'
import './TaskPage.css'

const TaskPage = () => {
  return (
    <div className='app__taskpage'>
        <div className='taskpage__title'>
            <div className='task-title'>
                Tasks
            </div>
            <div className='task-share'>
                Share
            </div>
        </div>
        <div className='taskpage__items'>
            <Task />
            <Task />
        </div>
        <div className='taskpage__itemadd'>
            <div className='taskpage__addtask'>
              <div className='addtask-input'>
                <textarea 
                  type="text"
                  placeholder='E.g., reschedule dentist appointment'
                />
              </div>
              <div className='addtask-options'>
                <div className='addtask-date'>
                  <button>
                    <BsCalendarDate /> Today
                  </button>
                </div>
                <div className='addtask-priority'>
                  <button>High</button>
                </div>
              </div>
            </div>
            <div className='taskpage__buttons'>
              <button className='taskpage__button-cancel'>Cancel</button>
              <button className='taskpage__button-add'>Add task</button>
            </div>
        </div>
    </div>
  )
}

export default TaskPage