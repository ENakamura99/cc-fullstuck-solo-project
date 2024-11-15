//開発環境と本番環境で異なるデータベースに接続できるように設定
const knex = require('knex')
const knexConfig = require('../knexfile')

//process.env.NODE_ENV が設定されていない場合開発環境のDBを使用
const environment = process.env.NODE_ENV || 'development'

module.exports = knex(knexConfig[environment])