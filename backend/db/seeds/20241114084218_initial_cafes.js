const fs = require('fs');

//データ挿入
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cafes').del()

  // ファイル名を指定してバイナリデータを挿入
  const photoData1 = fs.readFileSync('C:/Users/NakamuraEmika/Desktop/CodeChrysalisPrecourseV2/solo-project-v2/cc-fullstuck-solo-project/photos/pexels-julieaagaard-2467287.jpg');
  const photoData2 = fs.readFileSync('C:/Users/NakamuraEmika/Desktop/CodeChrysalisPrecourseV2/solo-project-v2/cc-fullstuck-solo-project/photos/pexels-fotios-photos-907142.jpg')
  const photoData3 = fs.readFileSync('C:/Users/NakamuraEmika/Desktop/CodeChrysalisPrecourseV2/solo-project-v2/cc-fullstuck-solo-project/photos/pexels-chevanon-312418.jpg')
  const photoData4 = fs.readFileSync('C:/Users/NakamuraEmika/Desktop/CodeChrysalisPrecourseV2/solo-project-v2/cc-fullstuck-solo-project/photos/pexels-arthurbrognoli-2260824.jpg')
  const photoData5 = fs.readFileSync('C:/Users/NakamuraEmika/Desktop/CodeChrysalisPrecourseV2/solo-project-v2/cc-fullstuck-solo-project/photos/pexels-fotios-photos-1833769.jpg')

  await knex('cafes').insert([
    { 
      cafeName: 'Moonlight Brew',
      photo: photoData1, 
      review: 4,
      address: '東京都渋谷区神南1-23-10',
      businessHours: '10:00-17:00'
    }, 
    { 
      cafeName: 'Echoes of Coffee',
      photo: photoData2,
      review: 3,
      address: '東京都渋谷区恵比寿南1-5-10',
      businessHours: '10:00-15:00'
    }, 
    { 
      cafeName: 'Cafe Tokyo',
      photo: photoData3,
      review: 4,
      address: '東京都新宿区新宿3-30-13',
      businessHours: '10:00-17:00'
    },
    { 
      cafeName: 'Coffee & Jazz',
      photo: photoData4,
      review: 5,
      address: '東京都渋谷区代官山町17-5',
      businessHours: '11:00-20:00'
    }, 
    { 
      cafeName: 'Cafe Sunrise',
      photo: photoData5,
      review: 4,
      address: '東京都新宿区西新宿1-1-3',
      businessHours: '7:00-15:00'
    },
  ]
  )
}

