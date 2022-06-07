import { Task } from "api/Domain/Task";
import { TCreateTaskResponseBody, TFindTaskAllResponseBody } from "types";

export abstract class ITaskRepository {
  abstract create(task: Task): Promise<TCreateTaskResponseBody>;
  abstract findAll(): Promise<TFindTaskAllResponseBody>;
}
