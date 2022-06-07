import { CreateTaskController } from "api/Http/Controller/Task/CreateTaskController";
import { FindTaskAllController } from "api/Http/Controller/Task/FindTaskAllController";
import { TaskRepository } from "api/Infrastructure/repositories/Task/TaskRepository";
import { CreateTaskInteractor } from "api/UseCase/Task/CreateTask/CreateTaskInteractor";
import { FindTaskAllInteractor } from "api/UseCase/Task/FindTaskAll/FindTaskAllInteractor";
import { NextApiRequest, NextApiResponse } from "next";
import { TCreateTaskRequestBody, TFindTaskAllResponseBody } from "types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const taskRepository = new TaskRepository();
  const useCaseInteractor = new FindTaskAllInteractor(taskRepository);
  const controller = new FindTaskAllController(useCaseInteractor);
  const result = await controller.FindTaskAll({});

  res.status(200).json(result);
};

export default handler;
