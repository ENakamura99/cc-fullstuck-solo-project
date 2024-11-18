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
  const photoData6 = fs.readFileSync('C:/Users/NakamuraEmika/Desktop/CodeChrysalisPrecourseV2/solo-project-v2/cc-fullstuck-solo-project/photos/pexels-lina-1813466.jpg')
  const photoData7 = fs.readFileSync('C:/Users/NakamuraEmika/Desktop/CodeChrysalisPrecourseV2/solo-project-v2/cc-fullstuck-solo-project/photos/pexels-ekrulila-2307221.jpg')
  const photoData8 = fs.readFileSync('C:/Users/NakamuraEmika/Desktop/CodeChrysalisPrecourseV2/solo-project-v2/cc-fullstuck-solo-project/photos/pexels-pratikgupta-2748537.jpg')

  await knex('cafes').insert([
    { 
      cafeName: 'Moonlight Brew',
      photo: photoData1, 
      address: '東京都渋谷区神南1-23-10',
      businessHours: '10:00-17:00',
      wifi: true,
      outlet: true,
      smoking: false,
      atmosphere: '落ち着いている、おしゃれ',
      crowdCondition: '比較的すいている',
      priceRange: '500円-1000円',
      coffeeReview: 'カフェラテを頼んだが豆の味が濃くおいしかった'
    }, 
    { 
      cafeName: 'Echoes of Coffee',
      photo: photoData2,
      address: '東京都渋谷区恵比寿南1-5-10',
      businessHours: '10:00-15:00',
      wifi: false,
      outlet: false,
      smoking: false,
      atmosphere: '学生が多い、にぎやか',
      crowdCondition: '常に混んでいる、行列あり',
      priceRange: '1000円-2000円',
      coffeeReview: 'ケーキセットがおいしかった'
    }, 
    { 
      cafeName: 'Cafe Tokyo',
      photo: photoData3,
      address: '東京都新宿区新宿3-30-13',
      businessHours: '10:00-17:00',
      wifi: true,
      outlet: true,
      smoking: true,
      atmosphere: '静か、勉強している人が多め。席数も多く長時間滞在可能',
      crowdCondition: '満席になることが多いが席が多いので並ぶことはない',
      priceRange: '1000円-2000円(2時間に一回オーダーする必要がある)',
      coffeeReview: 'ケーキセットがおいしかった'
    },
    { 
      cafeName: 'Coffee & Jazz',
      photo: photoData4,
      address: '東京都渋谷区代官山町17-5',
      businessHours: '11:00-20:00',
      wifi: false,
      outlet: false,
      smoking: true,
      atmosphere: '静か、雰囲気がいい。夜カフェとかにお勧め',
      crowdCondition: '特に混んでる印象はない',
      priceRange: '500円-1000円',
      coffeeReview: 'コーヒーの種類もたくさんあり、今回はフルーティーなコーヒーを注文した。おいしかった'
    }, 
    { 
      cafeName: 'Cafe Sunrise',
      photo: photoData5,
      address: '東京都新宿区西新宿1-1-3',
      businessHours: '7:00-15:00',
      wifi: true,
      outlet: false,
      smoking: false,
      atmosphere: '店内は狭く席数は少ない',
      crowdCondition: '席数が少ないので並ぶ可能性あり',
      priceRange: '600円-1500円',
      coffeeReview: 'メニューは少ないが、どれもこだわりの感じられるおいしいコーヒーだった。'
    
    },
    { 
      cafeName: 'Moonlight Brew',
      photo: photoData6, 
      address: '東京都渋谷区神南1-23-10',
      businessHours: '10:00-17:00',
      wifi: true,
      outlet: true,
      smoking: false,
      atmosphere: 'ゆっくりするのにとてもいい',
      crowdCondition: 'すいている',
      priceRange: '500円-1500円',
      coffeeReview: '豆にこだわりを持っている店主で、本日のコーヒーがおいしかった'
    }, 
    { 
      cafeName: 'Moonlight Brew',
      photo: photoData7, 
      address: '東京都渋谷区神南1-23-10',
      businessHours: '10:00-17:00',
      wifi: true,
      outlet: true,
      smoking: false,
      atmosphere: '落ち着いた雰囲気のあるカフェ',
      crowdCondition: '行く時間帯にもよるがすいていた',
      priceRange: '700円-1200円',
      coffeeReview: 'ストロベリーコーヒーという名前に惹かれ頼んでみたが名前の通りイチゴの味がしておいしいコーヒーだった'
    }, 
    { 
      cafeName: 'Moonlight Brew',
      photo: photoData8, 
      address: '東京都渋谷区神南1-23-10',
      businessHours: '10:00-17:00',
      wifi: true,
      outlet: true,
      smoking: false,
      atmosphere: 'おしゃれ、モダンな雰囲気',
      crowdCondition: 'すいている、落ち着いている印象',
      priceRange: '500円-1300円',
      coffeeReview: 'アメリカンを頼んだがあっさりしていて好みの味だった'
    }, 
  ]
  )
}

