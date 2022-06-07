import { ITask, Task } from "api/Domain/Task";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { TCreateTaskResponseBody, TFindTaskAllResponseBody } from "types";
import { Template } from "view/components/templates";
import { getAsync } from "view/modules/apiClient";

const Home: NextPage = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const createTask = async () => {
    const { data, status } = await getAsync<TCreateTaskResponseBody>(
      "/api/task/create",
      {
        taskNo: "HTL-2388",
        date: new Date(),
        hour: 7,
      }
    );
  };
  useEffect(() => {
    const getTaskAll = async () => {
      const { data, status } = await getAsync<TFindTaskAllResponseBody>(
        "/api/task"
      );
      setTaskList(data.taskList);
    };
    getTaskAll();
  }, []);
  return (
    <Template title="test">
      <div>
        <button onClick={() => createTask()}>button</button>
        <div>
          {taskList.map((t, i) => (
            <li key={"task" + i}>{t.taskNo}</li>
          ))}
        </div>
      </div>
    </Template>
  );
};

export default Home;
