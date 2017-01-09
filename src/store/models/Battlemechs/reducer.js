//@flow
import * as actionTypes from './actionTypes'
import type { FSA } from '../Pilots/actions'
import schema from '../schema'
import type { Battlemech, BattlemechDesign } from './model'
import type { BattlemechOptionalDesign } from './actions'

const initialState = schema.getDefaultState()

export default function reducer ( state = initialState, action:FSA) {
  const session = schema.from(state)
  let newState
  const type:string = action.type
  let payload

  switch(type) {
    case actionTypes.CREATE_MECH: {
      const { payload }:{ payload: Battlemech } = action
      const { Battlemech }  = session.Battlemech
      Battlemech.create(payload)
      newState = session.reduce()
      break
    }

    case actionTypes.CREATE_DESIGN: {
      const { BattlemechDesign } = session
      const { payload } : { payload:BattlemechDesign } = action
        BattlemechDesign.create(payload)
        newState = session.reduce()
        break
    }

    case actionTypes.UPDATE_DESIGN: {
      const { BattlemechDesign } = session
      const { payload }:{ payload:string } = action
      const design = BattlemechDesign.withId(payload)
      if(design != null) {
        design.update(payload)
      }
      newState = session.reduce()
      break
    }

    case actionTypes.REMOVE_MECH: {
      const { Battlemech } = session
      const {payload }:{ payload:number } = action
      const mech = Battlemech.withId(payload)
      if(mech != null) {
        mech.delete()
      }
      newState = session.reduce()
      break
    }

    case actionTypes.REMOVE_DESIGN: {
      const { BattlemechDesign, Battlemech } = session
      const { payload }:{ payload:number } = action
      const designDel = BattlemechDesign.withId(payload)
      const type = designDel.id
      if(designDel != null) {
        designDel.delete()
      }
      Battlemech.filter({type }).forEach(mech => mech.delete())
      newState = session.reduce()
      break
    }

    default:
      newState = session.reduce()
  }
  return newState
}
