import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Event } from '../services/events'
import { useDispatch } from 'react-redux'
import { addEvent } from '../store/reducers/events'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/createEvent.css'

const CreateEvent: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = useState({
    eventName: '',
    hostName: '',
    hostReference: '',
    streetName: '',
    locationReference: '',
    startAt: '',
    endAt: ''
  })

  const onHandleInput = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name]: value
    })
  }

  const onNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      !data.hostName || !data.hostReference ||
      !data.locationReference || !data.streetName ||
      !data.endAt || !data.startAt ||
      !data.eventName
    ) {
      return alert('Please complete all the fields and try it again')
    }

    const event: Event = {
      id: new Date().valueOf().toString(),
      endAt: data.endAt,
      startAt: data.startAt,
      name: data.eventName,
      host: { name: data.hostName, reference: data.hostReference },
      location: { streetName: data.startAt, reference: data.locationReference },
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON()
    }
    dispatch(addEvent(event))
    navigate('/event')
  }
  return (
    <div className='create-event-content'>
      <h1 className='h1-gradient'>New envited</h1>

      <form onSubmit={onNext}>
        <input
          required
          name='eventName'
          value={data.eventName} placeholder='Event
          name'
          onChange={onHandleInput}
        />

        <input
          required
          name='hostName'
          value={data.hostName} placeholder='Host
          name'
          onChange={onHandleInput}
        />

        <input
          required
          name='hostReference'
          value={data.hostReference} placeholder='Host
          reference'
          onChange={onHandleInput}
        />

        <input
          required
          name='streetName'
          value={data.streetName} placeholder='Street
          name'
          onChange={onHandleInput}
        />

        <input
          required
          name='locationReference'
          value={data.locationReference} placeholder='location
          reference'
          onChange={onHandleInput}
        />

        <input
          required
          name='startAt'
          type='datetime-local' value={data.startAt}
          placeholder='location reference'
          onChange={onHandleInput}
        />

        <input
          required
          name='endAt'
          type='datetime-local' value={data.endAt}
          placeholder='location reference'
          onChange={onHandleInput}
        />

        <br />
        <br />
        <button type='submit'>
          🎉 Create my event
        </button>
      </form>
    </div>
  )
}

export default CreateEvent
