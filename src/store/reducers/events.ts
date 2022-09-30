import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app'
import { Event } from '../../services/events'

type Props = {
    events: Event[]
}

const initialState: Props = {
  events: []
}

export const commonSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, { payload }: PayloadAction<Event>) => {
      state.events.push(payload)
    },
    editEvent: (state, { payload }: PayloadAction<Event>) => {
      const eventIndex = state.events.findIndex(({ id }) => id === payload.id)
      if (eventIndex >= 0) {
        state.events[eventIndex] = payload
      }
    },
    deleteEvent: (state, { payload }: PayloadAction<string>) => {
      const eventIndex = state.events.findIndex(({ id }) => id === payload)
      if (eventIndex >= 0) {
        state.events.splice(eventIndex, 1)
      }
    }
  }
})

export const {
  addEvent,
  editEvent,
  deleteEvent
} = commonSlice.actions
export const selectCommonReducer = (state: RootState) => state.eventsReducer
export default commonSlice.reducer
