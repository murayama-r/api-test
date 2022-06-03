import { Task } from "api/Domain/Task";

export abstract class ITaskRepository {
  abstract create(task: Task): void;
  abstract findAll(): Promise<Task[]>;
}
