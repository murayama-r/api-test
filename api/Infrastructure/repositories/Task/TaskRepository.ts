import { Task } from "api/Domain/Task";
import { ITaskRepository } from "./ITaskRepository";
import escape from "sql-template-strings";
import { query } from "../IDBConnection";
import { TCreateTaskResponseBody, TFindTaskAllResponseBody } from "types";

export class TaskRepository extends ITaskRepository {
  async create(task: Task): Promise<TCreateTaskResponseBody> {
    try {
      return await query<TCreateTaskResponseBody>(
        `INSERT into task (taskNo, date, hour) VALUE ("${task.taskNo}", "${task.date}", ${task.hour});`
      );
    } catch (e) {
      return { error: String(e) };
    }
  }
  async findAll(): Promise<TFindTaskAllResponseBody> {
    try {
      const result = await query<Task[]>(
        `SELECT taskNo, date, hour FROM task;`
      );

      return { taskList: result };
    } catch (e) {
      return { taskList: [], error: String(e) };
    }
  }
}
