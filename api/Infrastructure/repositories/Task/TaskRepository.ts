import { Task } from "api/Domain/Task";
import { ITaskRepository } from "./ITaskRepository";

export class TaskRepository extends ITaskRepository {
  create(task: Task): void {
    console.log("----------------task----------------");
    console.log(task);
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Task[]> {
    const result: Task[] = [];
    const a = async () => {
      const test: Task[] = [
        new Task("HTL-333", new Date("2022/05/11"), 8),
        new Task("HTL-334", new Date("2022/05/12"), 3),
        new Task("HTL-335", new Date("2022/05/13"), 6),
      ];
      return await test;
    };
    console.log("findall");

    // throw new Error("Method not implemented.");
    return a();
  }
}
