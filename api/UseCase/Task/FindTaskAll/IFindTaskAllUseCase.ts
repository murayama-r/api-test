import { ITask, Task } from "api/Domain/Task";
import { TFindTaskAllResponseBody } from "types";
import { FindTaskAllInputData } from "./FindTaskAllInputData";

// Input Boudary
// UseCaseが持つ関数のインターフェース
export abstract class IFindTaskAllUseCase {
  abstract findAll(
    inputData: FindTaskAllInputData
  ): Promise<TFindTaskAllResponseBody>;
}
