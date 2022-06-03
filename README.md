# api-test

node の API サーバーの勉強のため
database 接続までをできるだけクリーンアーキテクチャな構造で作りたい

### 全体の構造

- api
  - Http
    - Controller
      - [DomainName]
        - [UseCaseName]Controller
          - index.ts - Controller
  - Domain
    - [DomainName]
      - index.ts - Entity
  - Infrastructure
    - repositories
      - [DomainName]
        - I[DomainName]Respository.ts - [Data Access Interface]
        - [DomainName]Respository.ts - [Data Access]
      - IDBConnection.ts - DataAccess が DB に直接依存しないように DB との接続をラップする
  - UseCase
    - [DomainName]
      - [UseCaseName]
        - [UseCaseName]InputData.ts - [Input Data] Controller が受けた requestBody から UseCase が使用するオブジェクトに変換することで UseCase が Controller に依存しないようにする
        - I[UseCaseName]UseCase.ts - [Input Boundary] UseCase が持つ関数などのインターフェースを定義するクラス
        - [UseCaseName]Interactor.ts - [UseCase Interactor] 実際にオブジェクトを操作する UseCase の具象クラス
- view
  - components
    - uiParts
      - [ComponentName]
        - index.tsx
    - organizms
      - [ComponentName]
        - index.tsx
        - hooks.ts
    - templates
      - [ComponentName]
        - index.tsx
        - hooks.ts
  - hooks
    - use[functionName].ts - 共通で使用するカスタムフック
  - modules - apiclient など
  - styles - globalcss
- pages - router
  - api - api router
  - page - page router
- public - フロントで使用する画像など（gcp とかに画像を置くなら fabicon とか以外はいらない）
- types - 共通の型を定義する　例　 apiRequestBody, apiResponseBody

view の Components の分け方をもう少し Domain に寄せてもいいのかも

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

