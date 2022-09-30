import { FC } from 'react'
import '../assets/styles/event.css'
import { GoCalendar } from 'react-icons/go'
import { BsCaretRight } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const cakeImage = require('../assets/images/cake.png')

const EventDetails: FC = () => {
  return (
    <div className='event-content'>
      <img src={cakeImage} alt='' />

      <div className='content'>
        <h2>Hola</h2>
        <p>Hosted by <b>Maria</b></p>

        <div className='item'>
          <div className='icon'><GoCalendar /></div>
          <div className='info'>
            <p className='item-title'>hola</p>
            <p className='item-content'>test</p>
          </div>
          <div className='iconEnd'><BsCaretRight /></div>
        </div>

        <div className='item'>
          <div className='icon'>
            <HiOutlineLocationMarker />
          </div>
          <div className='info'>
            <p className='item-title'>hola</p>
            <p className='item-content'>test</p>
          </div>
          <div className='iconEnd'>
            <BsCaretRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
