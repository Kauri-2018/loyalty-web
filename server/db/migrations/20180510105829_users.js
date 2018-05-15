exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('hash')
    table.string('username')
    table.string('role')
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
