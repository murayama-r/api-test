// Entityの型定義
export interface ITask {
  taskNo: string;
  date: Date;
  hour: number;
}

// Entity
export class Task implements ITask {
  private _taskNo: string;
  private _date: Date;
  private _hour: number;

  get taskNo(): string {
    return this._taskNo;
  }
  set taskNo(taskNo: string) {
    this._taskNo = taskNo;
  }

  get date(): Date {
    return this._date;
  }
  set date(date: Date) {
    this._date = date;
  }

  get hour(): number {
    return this._hour;
  }
  set hour(hour: number) {
    this._hour = hour;
  }

  constructor(taskNo: string = "", date: Date = new Date(), hour: number = 0) {
    this._taskNo = taskNo;
    this._date = date;
    this._hour = hour;
  }
}
