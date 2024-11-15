//expressの設定
const express = require('express')
const app = express();

//routing設定（/api/cafes にGET リクエストが来たときの処理を定義）
const knex = require('./db/knex')

//カフェ一覧取得
app.get('/api/cafes', async (req, res) => {
  try {
    //areaで絞る
    const cafes = await knex('cafes').select('*').where('address', 'like', `%${req.query.area}%`)

    const getRamdomUniqueCafes = (cafes)=> {
      //名前ごとにカフェを並べる
      const groupedCafes = cafes.reduce((acc, cafe) => {
        if (!acc.hasOwnProperty(cafe.cafeName)) {
          acc[cafe.cafeName] = [];
        }
        acc[cafe.cafeName].push({
          id: cafe.id,
          cafeName: cafe.cafeName,
          photo: cafe.photo,
          review: cafe.review,
          address: cafe.address,
          businessHours: cafe.businessHours,
        });
        return acc; n
      }, {}); 

      //同じ名前ならランダムに値を取得
      const modifiedCafes = []
      for (const name in groupedCafes) {

        if (name) {
          const group = groupedCafes[name];
          if (group.length > 1) {
            const randomSelectedCafe = group[Math.floor(Math.random() * group.length)]
            modifiedCafes.push(randomSelectedCafe);
          } else {
            modifiedCafes.push(group[0])
          }
        }
      }
      return modifiedCafes
    }

    const selectedCafes = getRamdomUniqueCafes(cafes)

    selectedCafes.forEach(cafe => {
      //photoをbinaryからbase64に変換
      const base64Photo = cafe.photo.toString('base64');
      cafe.photo = `data:image/jpeg;base64,${base64Photo}`;
    })
    
    res.status(200).json(selectedCafes)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get cafes' })
  }
})

//クリックされたカフェの情報と写真を取得
app.get('/api/cafes/:cafeName', async (req, res) => {
  try {
    const cafes = await knex('cafes').select('*').where('cafeName', `${req.params.cafeName}`)
    
    cafes.forEach(cafe => {
      //photoをbinaryからbase64に変換
      const base64Photo = cafe.photo.toString('base64');
      cafe.photo = `data:image/jpeg;base64,${base64Photo}`;
    })

    res.status(200).json(cafes)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get a cafe' })
  }
})


module.exports = app;