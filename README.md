# api-test
nodeのAPIサーバーの勉強のため
database接続までをできるだけクリーンアーキテクチャな構造で作りたい

### 初期構想

- Next.js
  - src以下にapi(server), view(front), pages(router)のフォルダを持つ
  - pages/api/
    - コントローラー層
    - クエリを受け取ってユースケース層に渡す
    - リクエストの型とレスポンスの型とステータスに責任を持つ
      - レスポンスの中身には責任を持たない
  - server/useCase
    - I~Usecase.ts apiのリクエストに直接依存しないように注意する
    - ~Interactor.ts ユースケースの実実装部分、ドメインの操作、リポジトリ層へのアクセスなどを行う
  - server/domain
  - server/infrastructure
    - /Repository
      - DBとの接続に責任を持つ
      - intefaceを作っておいてDBが変わってもいいようにしておく
      - I~.ts
      - ~.ts

