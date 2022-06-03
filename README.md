# api-test

node の API サーバーの勉強のため
database 接続までをできるだけクリーンアーキテクチャな構造で作りたい

### 初期構想

- Next.js
  - src 以下に api(server), view(front), pages(router)のフォルダを持つ
  - pages/api/
    - コントローラー層
    - クエリを受け取ってユースケース層に渡す
    - リクエストの型とレスポンスの型とステータスに責任を持つ
      - レスポンスの中身には責任を持たない
  - server/useCase
    - I~Usecase.ts api のリクエストに直接依存しないように注意する
    - ~Interactor.ts ユースケースの実実装部分、ドメインの操作、リポジトリ層へのアクセスなどを行う
  - server/domain
  - server/infrastructure
    - /Repository
      - DB との接続に責任を持つ
      - inteface を作っておいて DB が変わってもいいようにしておく
      - I~.ts
      - ~.ts

参考
[クリーンアーキテクチャの UseCase Input について見直してみた](https://zenn.dev/tkhrtkmk/articles/eb00e7f76b725d)
[Clean Architecture を Node.js+Typescript で実装してみる](https://blog.spacemarket.com/code/clean-architecture-node/)
