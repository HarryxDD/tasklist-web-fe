import React from 'react'
import './Task.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {BiDuplicate, BiTrash} from 'react-icons/bi'
import {CgCalendarDue} from 'react-icons/cg'
import {BsFillCalendarDateFill} from 'react-icons/bs'

const Task = () => {
  return (
    <div className='taskpage__task'>
        <div className='task__maininfo'>
            <div className='task__maininfo-radiobtn'>
                <input type="radio" />
            </div>
            <div className='task__maininfo-title'>
                <p>Pick up suit</p>
            </div>
            <div className='task__maininfo-menu'>
                <div className='task__info-edit'>
                    <AiOutlineEdit />
                </div>
                <div className='task__info-dup'>
                    <BiDuplicate />
                </div>
                <div className='task__info-more'>
                    <CgCalendarDue />
                </div>
                <div className='task__info-del'>
                    <BiTrash />
                </div>
            </div>
        </div>
        <div className='task__subinfo'>
            <div className='task__subinfo-day'>
                <BsFillCalendarDateFill /> Today
            </div>
            <span>-</span>
            <div className='task__subinfo-priority'>
                <p>Medium</p>
            </div>
        </div>
    </div>
  )
}

export default Task