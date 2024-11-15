//テーブル作成
exports.up = function (knex) {
    return knex.schema.createTable('cafes', (table) => {
      table.increments('id').primary()
      table.string('cafeName').notNullable()
      table.binary('photo').notNullable()
      table.integer('review').defaultTo(0)
      table.string('address').notNullable()
      table.string('businessHours').notNullable()
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('cafes')
  }
  