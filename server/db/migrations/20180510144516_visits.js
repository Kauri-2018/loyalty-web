exports.up = (knex, Promise) => {
  return knex.schema.createTable('visits', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('timestamp').default(Date.now())
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTable('visits')
}
