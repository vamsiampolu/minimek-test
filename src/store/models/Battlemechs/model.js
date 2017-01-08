import { Model, oneToOne, fk } from 'redux-orm'

export type Battlemech = {
  type: string,
  pilot?: number
}

export type BattlemechDesign = {
  id: string,
  name: string,
  weight: number
}

export class BattlemechDesign extends Model {
  static parse (mechDesignData:BattlemechDesign) {
    this.create(mechDesignData)
  }
}

export default class Battlemech extends Model {
  static parse (mechData:Battlemech) {
    this.create(mechData)
  }
}

Battlemech.fields = {
  type : fk('BattlemechDesign'),
  pilot: oneToOne('Pilot')
}
