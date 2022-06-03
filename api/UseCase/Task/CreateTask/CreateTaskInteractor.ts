import { Task } from "api/Domain/Task";
import { ITaskRepository } from "api/Infrastructure/repositories/Task/ITaskRepository";
import { CreateTaskInputData } from "./CreateTaskInputData";
import { ICreateTaskUseCase } from "./ICreateTaskUseCase";

export class CreateTaskInteractor extends ICreateTaskUseCase {
  private taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    super();
    this.taskRepository = taskRepository;
  }

  create(inputData: CreateTaskInputData) {
    const task = new Task(inputData.taskNo, inputData.date, inputData.hour);
    return this.taskRepository.create(task);
  }
}
