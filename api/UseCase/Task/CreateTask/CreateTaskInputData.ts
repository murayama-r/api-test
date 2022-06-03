import { TCreateTaskRequestBody } from "types";

// Input Data
// UseCaseがControllerに依存しないようにする
// Controllerが受けたrequestBodyからUseCaseが使用するオブジェクトに変換する
export class CreateTaskInputData {
  readonly taskNo: string;
  readonly date: Date;
  readonly hour: number;

  constructor(createTaskReqBody: TCreateTaskRequestBody) {
    this.taskNo = createTaskReqBody.taskNo;
    this.date = createTaskReqBody.date;
    this.hour = createTaskReqBody.hour;
  }
}
