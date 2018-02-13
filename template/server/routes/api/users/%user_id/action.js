const {GET} = require('.')

exports.GET = async (req) => {
  var {name} = await GET(req)
  return {message: `${name} has done an action`}
}
