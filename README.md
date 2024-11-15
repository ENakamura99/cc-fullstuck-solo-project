# cc-fullstuck-solo-project

# プロジェクトタイトル : Cafestagram

## 概要
「コーヒーが好き！」「カフェ巡りが趣味！」「新しいカフェを発見したい！」そんなコーヒー好きのために、効率的にカフェを検索しその雰囲気や特徴を事前に把握できるアプリを開発しました。
おしゃれなカフェを探したい、カフェの雰囲気を行く前に知りたい、カフェ探しの手間を省きたい、地図にはのってない隠れ家的なカフェを発見したい、そんな方にお勧めのアプリです。


### 基本機能
- エリアごとのカフェ検索
- 検索したエリアのカフェ情報の一覧表示
- 各カフェの詳細情報

### 使用方法（携帯での使用を想定）
１．アプリを起動後、トップページで行きたいエリアを検索
２．対象エリアのカフェの一覧（カフェ名と写真各一枚）が表示されるので、気になるカフェや行きたいカフェの写真をクリック
３．カフェの詳細情報（営業時間や住所など）が表示される


## インストール方法

１．github上で以下のプロジェクトに移動しForkし、urlをコピー<br>
[ENakamura99/cc-fullstuck-solo-project](https://github.com/ENakamura99/cc-fullstuck-solo-project.git)

２．任意のフォルダを作成し、作成したフォルダに移動。移動したフォルダ内に１で作成したリポジトリをクローン
```
git clone https://github.com/ENakamura99/cc-fullstuck-solo-project.git
```

３．クローンしたフォルダを開き、ターミナル上でブランチを作成し作成したブランチに移動
```
git checkout -b ブランチ名
```

４．Terminal上で以下コマンドを実行し必要パッケージをインストール
```
npm install
```

５．フロントエンド、バックエンドをそれぞれ起動
フロントエンド：
```
cd .\front\
npm run dev（vite）
```

バックエンド：
```
cd .\backend\
npm run start（node）もしくはnpm run dev（nodemon）
```

６．開発ツールを開きサイズを以下に設定<br>
390*844 (iphone12Pro)


## 仕様技術スタック

### フロントエンド
- React (Vite)
- CSS
- Axious（API通信）

### バックエンド
- Node.js
- Express.js
- Nodemon

### データベース
- PostgreSQL
- Knex

## 貢献方法
１．変更をAdd
```
git add .
```

２．コードをCommit
```
git commit -m "feat:ブランチ名　コミット内容"
```

３．コードをPush
```
git push origin 自身の作成したブランチ名
```

４．mainに対してプルリクエストを出す


## 開発者
Emika Nakamura <enakamura@example.com>