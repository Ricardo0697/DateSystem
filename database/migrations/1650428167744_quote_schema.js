'use strict'
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
class QuoteSchema extends Schema {
  up () {
    this.create('quotes', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.string('username', 80).notNullable()
      table.string('body').notNullable()
      table.timestamps()
    })
  }
  down () {
    this.drop('quotes')
  }
}
module.exports = QuoteSchema