import * as actionTypes from './actionTypes'
import type { BattlemechDesign, Battlemech } from './model'

export type BattlemechOptionalDesign = {
  id: string,
  name?: string,
  weight?: number
}

export function createDesign (payload) {
  return {
    type: actionTypes.CREATE_DESIGN,
    payload,
  }
}

export function removeDesign (payload:string) {
  return {
    type: actionTypes.REMOVE_DESIGN,
    payload,
  }
}

export function updateDesign (payload: BattlemechOptionalDesign) {
  return {
    type: actionTypes.UPDATE_DESIGN,
    payload,
  }
}

export function createMech (payload: Battlemech) {
  return {
    type: actionTypes.CREATE_MECH,
    payload
  }
}



export function removeMech (payload:number) {
  return {
    type: actionTypes.REMOVE_MECH,
    payload
  }
}
