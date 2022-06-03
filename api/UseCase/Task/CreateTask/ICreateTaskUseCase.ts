import { ITask } from "api/Domain/Task";
import { CreateTaskInputData } from "./CreateTaskInputData";

// Input Boudary
// UseCaseが持つ関数のインターフェース
export abstract class ICreateTaskUseCase {
  abstract create(inputData: CreateTaskInputData): void;
}
