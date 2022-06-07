import { CreateTaskController } from "api/Http/Controller/Task/CreateTaskController";
import { TaskRepository } from "api/Infrastructure/repositories/Task/TaskRepository";
import { CreateTaskInteractor } from "api/UseCase/Task/CreateTask/CreateTaskInteractor";
import { NextApiRequest, NextApiResponse } from "next";
import { TCreateTaskRequestBody } from "types";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // queryからobjectに変換
  // ここどうにかしたい
  const requestBody: TCreateTaskRequestBody = {
    taskNo: typeof req.query.taskNo === "string" ? req.query.taskNo : "",
    date:
      typeof req.query.date === "string"
        ? new Date(req.query.date)
        : new Date(),
    hour: typeof req.query.date === "string" ? Number(req.query.hour) : 0,
  };
  const taskRepository = new TaskRepository();
  const useCaseInteractor = new CreateTaskInteractor(taskRepository);

  const controller = new CreateTaskController(useCaseInteractor);
  const result = controller.CreateTask(requestBody);

  res.status(200).json({});
};

export default handler;
