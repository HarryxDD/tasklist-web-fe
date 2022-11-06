import React from 'react'
import { Explore, Header } from '../../components'
import './Home.css'

const Home = () => {
  return (
    <div className='app__home'>
        <Header />
        <Explore />
    </div>
  )
}

export default Home