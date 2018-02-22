const {createError} = require('micro')
const parse = require('micro-body')
const {GET} = require('.')

exports.GET = (req) => {
  let {name} = GET(req)
  return {message: `${name} has done an action`}
}

exports.PUT = async (req) => {
  let {name} = GET(req)
  let {action} = await parse(req)
  if (!action) throw createError(400, 'action not present')
  return {message: `${name} has done an action: ${action}`}
}
