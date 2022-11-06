import React from 'react'
import './Navbar.css'
import { GrHomeRounded } from 'react-icons/gr';
import { AiOutlinePlus, AiOutlineQuestionCircle, AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='app__navbar navbar__padding'>
        <div className='app__navbar-home'>
            <div className='navbar-homelogo'>
                <GrHomeRounded />
            </div>
            <div className='navbar-search'>
                <AiOutlineSearch />
                <input type="text" />
            </div>
        </div>
        <div className='app__navbar-info'>
            <div className='navbar-more'>
                <AiOutlinePlus />
            </div>
            <div className='navbar-ques'>
                <AiOutlineQuestionCircle />
            </div>
            <div className='navbar-noti'>
                <AiOutlineBell />
            </div>
            <div className='navbar-user'>
                <div className='login-button'>Login</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar