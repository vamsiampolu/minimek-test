import * as actionTypes from './actionTypes'
import type { Pilot, Skill, Role, Status } from './model'

export type PilotMech = {
  pilot: number,
  mech: number
}

export type PilotCompany = {
  pilot: number,
  company: number
}

export type PilotSkill = {
  pilot: number,
  skill: Skill
}

export type PilotRole = {
  pilot: number,
  role: Role
}

export type PilotStatus = {
  pilot: number,
  status: Status
}

export type FSA = {
  type: string,
  payload?: any,
  error?: any,
  meta?: any
}

export function createpilot (payload: pilot): FSA {
  return {
    type: actiontypes.CREATE_PILOT,
    payload
  }
}

export function assignmechtopilot (payload: pilotmech): FSA {
  return {
    type: actiontypes.ASSIGN_MECH_TO_PILOT,
    payload
  }
}

export function removePilot (payload:number):FSA {
  return {
    type: actionTypes.REMOVE_PILOT,
    payload
  }
}

export function joinCompany (payload: PilotCompany):FSA {
  return {
    type: actionTypes.JOIN_COMPANY,
    payload
  }
}

export function changeSkill (payload:PilotSkill):FSA {
  return {
    type: actionTypes.CHANGE_SKILL,
    payload
  }
}

export function changeRole (payload:PilotRole):FSA {
  return {
    type: actionTypes.CHANGE_ROLE,
    payload
  }
}

export function changeStatus (payload: PilotStatus): FSA {
  return {
    type: actionTypes.CHANGE_STATUS,
    payload
  }
}
