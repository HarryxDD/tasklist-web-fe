import React from 'react'
import './Header.css'
import images from '../../../constants/images'

const Header = () => {
  return (
    <div className='home__header'>
        <div className='home__header-media'>
            <div className='home__header-background'>
                <img src={images.background} alt="" />
                <div className='button__change-background'>
                    <p>+</p>
                </div>
            </div>
            <div className='home__header-avatar'>
                <img src={images.avatar} alt="" />
            </div>
        </div>
        <div className='home__header-info'>
            <div className='header__info-name'>
                <h1>TRUONG HA VU</h1>
            </div>
            <div className='header__info-welcome'>
                <p>Welcome to your task manager</p>
            </div>
        </div>
    </div>
  )
}

export default Header