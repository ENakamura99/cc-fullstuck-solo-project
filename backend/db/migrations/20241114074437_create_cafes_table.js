//テーブル作成
exports.up = function (knex) {
  return knex.schema.createTable('cafes', (table) => {
    table.increments('id').primary()
    table.string('cafeName').notNullable()
    table.binary('photo').notNullable()
    table.string('address').notNullable()
    table.string('businessHours').notNullable()
    table.boolean('wifi').nullable().defaultTo(false)
    table.boolean('outlet').nullable().defaultTo(false)
    table.boolean('smoking').nullable().defaultTo(false)
    table.string('atmosphere').notNullable()
    table.string('crowdCondition').notNullable()
    table.string('priceRange').notNullable()
    table.string('coffeeReview').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('cafes')
}
