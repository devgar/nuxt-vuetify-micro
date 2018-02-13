const {createError} = require('micro')
const parse = require('micro-body')

const users = [
  { name: 'Alexandre', id: 1 },
  { name: 'Sébastien', id: 2 },
  { name: 'Sebastian', id: 3 }
]

exports._users = users

exports.GET = async () => users

exports.POST = async (req) => {
  let {name} = await parse(req)
  if (!name) throw createError(400, 'name not present')
  let id = Math.max.apply(Math, users.map((o) => o.id)) + 1
  users.push({name, id})
  return {name, id}
}

exports.PUT = async () => {
  throw new Error('Unhandled method')
}
