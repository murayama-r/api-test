import { TCreateTaskRequestBody } from "types";
import dayjs from "dayjs";

// Input Data
// UseCaseがControllerに依存しないようにする
// Controllerが受けたrequestBodyからUseCaseが使用するオブジェクトに変換する
export class CreateTaskInputData {
  readonly taskNo: string;
  readonly date: string; // YYYY-MM-DD
  readonly hour: number;

  constructor(createTaskReqBody: TCreateTaskRequestBody) {
    this.taskNo = createTaskReqBody.taskNo;
    this.date = dayjs(createTaskReqBody.date).format("YYYY-MM-DD");
    this.hour = createTaskReqBody.hour;
  }
}
