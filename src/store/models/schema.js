//@flow
import { Battlemech, BattlemechDesign } from './Battlemechs/model'
import { Pilot } from './Pilots/model'
import { Schema } from 'redux-orm'

const schema = new Schema()
schema.register(Pilot, Battlemech, BattlemechDesign)

export default schema
