const { createError } = require('micro')
const parse = require('micro-body')
const {_users} = require('..')

function findUser (req) {
  let id = parseInt(typeof req === 'number' ? req : req.params.user_id)
  if (isNaN(id)) throw createError(400, 'Invalid type for user id')
  let user = _users.find(element => element.id === id)
  if (!user) throw createError(404, 'User not found')
  return user
}

exports.GET = async (req) => findUser(req)

exports.PUT = async (req) => {
  let {name} = await parse(req)
  if (!name) throw createError(400, 'name not present')
  return Object.assign(findUser(req), {name})
}

exports.DELETE = async (req) => {
  let id = parseInt(typeof req === 'number' ? req : req.params.id)
  if (isNaN(id)) throw createError(400, 'Invalid type for user id')
  let i = _users.map(user => user.id).indexOf(id)
  if (i < 0) throw createError(404, 'User not found')
  return _users.splice(i, 1)
}
