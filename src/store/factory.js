import _factory from 'factory-girl'
import bluebird from 'bluebird'

const factory = _factory.promisify(bluebird)

export default factory

