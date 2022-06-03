import { CreateTaskInputData } from "api/UseCase/Task/CreateTask/CreateTaskInputData";
import { ICreateTaskUseCase } from "api/UseCase/Task/CreateTask/ICreateTaskUseCase";
import { TCreateTaskRequestBody } from "types";

export class CreateTaskController {
  private readonly createTaskUseCase: ICreateTaskUseCase;
  constructor(createTaskUseCase: ICreateTaskUseCase) {
    this.createTaskUseCase = createTaskUseCase;
  }

  public CreateTask(createTaskReqBody: TCreateTaskRequestBody) {
    const inputData = new CreateTaskInputData(createTaskReqBody);
    return this.createTaskUseCase.create(inputData);
  }
}
