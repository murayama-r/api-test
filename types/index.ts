import { ITask } from "api/Domain/Task";

type TApiResponseBody = {
  error?: string;
};

export type TCreateTaskRequestBody = {
  taskNo: string;
  date: Date;
  hour: number;
};

export type TCreateTaskResponseBody = TApiResponseBody & {};

export type TFindTaskAllRequestBody = {};
export type TFindTaskAllResponseBody = TApiResponseBody & {
  taskList: ITask[];
};
