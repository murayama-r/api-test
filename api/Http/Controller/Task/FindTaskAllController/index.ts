import { FindTaskAllInputData } from "api/UseCase/Task/FindTaskAll/FindTaskAllInputData";
import { IFindTaskAllUseCase } from "api/UseCase/Task/FindTaskAll/IFindTaskAllUseCase";
import { TFindTaskAllRequestBody } from "types";

export class FindTaskAllController {
  private readonly findTaskAllUseCase: IFindTaskAllUseCase;
  constructor(findTaskAllUseCase: IFindTaskAllUseCase) {
    this.findTaskAllUseCase = findTaskAllUseCase;
  }

  public FindTaskAll(findTaskReqBody: TFindTaskAllRequestBody) {
    const inputData = new FindTaskAllInputData(findTaskReqBody);
    return this.findTaskAllUseCase.findAll(inputData);
  }
}
