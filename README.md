# api-test

node の API サーバーの勉強のため
できるだけ DDD× クリーンアーキテクチャな構造で作りたい

### 全体の構造

- api
  - Http
    - Controller
      - [DomainName] -[CRUD or Function]
        - [UseCaseName]Controller.ts
  - Domain
    - [DomainName]
      - index.ts - Entity
  - Infrastructure
    - repositories
      - [DomainName]
        - I[DomainName]Respository.ts - [Data Access Interface]
        - [DataBaseName][domainname]Respository.ts - [Data Access]
      - I[DataBaseName]Connection.ts - DataAccess が DB に直接依存しないように DB との接続をラップする // あまり重要じゃないかも
  - UseCase
    - [DomainName]
      - [UseCaseName] -[CRUD or Function]
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
    - use[DomainName].ts - 共通で使用するカスタムフック
  - modules - apiclient など
  - styles - globalcss
- pages - router
  - api - api router
  - page - page router
- public - フロントで使用する画像など（gcp とかに画像を置くなら fabicon とか以外はいらない）
- types - 共通の型を定義する　例　 apiRequestBody, apiResponseBody

view の Components の分け方をもう少し Domain に寄せてもいいのかも
状態管理に mobx か recoil あたりを入れようか迷っている

参考

[クリーンアーキテクチャの UseCase Input について見直してみた](https://zenn.dev/tkhrtkmk/articles/eb00e7f76b725d)

[Clean Architecture を Node.js+Typescript で実装してみる](https://blog.spacemarket.com/code/clean-architecture-node/)
