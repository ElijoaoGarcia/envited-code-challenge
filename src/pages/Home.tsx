import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/home.css'

const mainArt = require('../assets/images/event.png')
const Home: FC = () => {
  const navigate = useNavigate()

  const goToCreate = () => navigate('/create')
  return (
    <div className='home-content'>

      <div className='desktop-content'>

        <h1>Imagine if</h1>
        <h1 className='h1-gradient'>Snapchat</h1>
        <h1>had events.</h1>

        <p className=''>
          Easily host and share events with your friends across any social media.
        </p>

        <button className='desktop' onClick={goToCreate}>
          🎉 Create my event
        </button>

      </div>

      <img src={mainArt} alt='' className='main-art' />

      <button onClick={goToCreate} className='mobile'>
        🎉 Create my event
      </button>

    </div>
  )
}

export default Home
