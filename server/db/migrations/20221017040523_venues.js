/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('venues', (table) => {
    table.string('id').primary()
    table.string('name')
    table.string('address')
    table.string('contact')
    table.string('email')
    table.string('phone')
    table.string('website')
    table.string('size')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {}
