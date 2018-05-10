exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('name')
    table.string('photo_url')
    table.string('email')
    table.string('expiry_date')
    table.string('membership_type')
    table.string('membership_number')
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}
