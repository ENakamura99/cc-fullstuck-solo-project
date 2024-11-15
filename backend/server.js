//expressの設定
const express = require('express')
const app = express();

//routing設定（/api/cafes にGET リクエストが来たときの処理を定義）
const knex = require('./db/knex')
app.get('/api/cafes', async (req, res) => {
  try {

    const cafes = await knex('cafes').select('cafeName')
    //expressを使う -areaが来た時の処理とcafeNameが来た時の値をそれぞれ書く

    res.status(200).json(cafes)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get todos' })
  }
})

module.exports = app;