import { TFindTaskAllRequestBody } from "types";

// Input Data
// UseCaseがControllerに依存しないようにする
// Controllerが受けたrequestBodyからUseCaseが使用するオブジェクトに変換する
export class FindTaskAllInputData {
  constructor(findTaskAllReqBody: TFindTaskAllRequestBody) {}
}
