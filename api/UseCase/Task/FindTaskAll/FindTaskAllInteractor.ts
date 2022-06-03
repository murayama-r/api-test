import { Task } from "api/Domain/Task";
import { ITaskRepository } from "api/Infrastructure/repositories/Task/ITaskRepository";
import { FindTaskAllInputData } from "./FindTaskAllInputData";
import { IFindTaskAllUseCase } from "./IFindTaskAllUseCase";

export class FindTaskAllInteractor extends IFindTaskAllUseCase {
  private taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    super();
    this.taskRepository = taskRepository;
  }

  findAll(inputData: FindTaskAllInputData) {
    return this.taskRepository.findAll();
  }
}
