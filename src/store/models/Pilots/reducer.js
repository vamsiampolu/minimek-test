import schema from '../schema'
import * as actionTypes from './actionTypes'
import type { Pilot } from './model'
import type { PilotMech } from './actions'

export default function reducer(state, action) {
  const { type }: {type:string} = action
  const session = schema.from(state)
  let newState

  switch(type) {
    case actionTypes.CREATE_PILOT: {
      const { Pilot } = session
      const { payload }: { payload:Pilot} = action
      Pilot.create(payload)
      newState = session.reduce()
      break
    }

    case actionTypes.ASSIGN_MECH_TO_PILOT: {
      const { Pilot } = session
      const { payload }: {payload:PilotMech} = action
      const pilotId = payload.pilot
      const pilot = Pilot.withId(pilotId)
      if(pilot != null) {
        const mechId = payload.mech
        pilot.mech = mechId
      }
      newState = session.reduce()
    }

  }
  return newState
}
