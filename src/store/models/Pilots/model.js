import { Model, oneToOne, fk } from 'redux-orm'

export type Skill = 'Veteran' | 'Regular' | 'Elite'
export type Status = 'Active' | 'Inactive'
export type Role = 'Commander'| 'Major' | 'Captain' | 'Lieutenant' | 'Sergeant' | 'Sergeant Major'
export type Status = 'Active' | 'Inactive'

export type Pilot = {
  rank: string,
  name: string,
  age: number,
  gunnery: number,
  piloting: number,
  skill: Skill,
  role: Role,
  mech?: number,
  force?: string,
  company?:string
}

export default class Pilot extends Model {
  static parse (pilot: Pilot) {
    this.create(pilot)
  }
}

Pilot.fields = {
  mech: oneToOne('Battlemech'),
}
