import { Injectable } from '@angular/core';
import { ListComponent } from './list/list.component';

@Injectable({
  providedIn: 'platform'
})
export class ListService {
  messege: string = "";
  // flag!: boolean;
  private taskList: Task[] = [];

  constructor() { }

  get List() {
    return this.taskList.sort((a, b) => {
      let da = new Date(a.dueDate).getTime();
      let db = new Date(b.dueDate).getTime();
      return da - db;
    });
  }

  newTask($event: any) {
    // this.flag = true;
    
      let task = new Task($event["taskId"], $event["taskTitle"], $event["taskData"], $event["dueDate"], $event["status"]);
      this.taskList.push(task);
    
  }

  date() {
    return new Date();
  }

  check(dued: Date): boolean {
    let a: number = dued.getDate();
    let b: number = dued.getMonth();
    let c: number = dued.getFullYear();

    let d: Date = this.date();

    let x: number = d.getDate();
    let y: number = d.getMonth();
    let z: number = d.getFullYear();

    if (c >= z && b >= y && a - x === 1)
      return true;
    else return false;
  }

  done(id: number) {
    let ind1 = this.taskList.findIndex((task) => task.taskId===id);
    this.taskList[ind1].status = "completed";
  }

  pending(id: number) {
    let ind2 = this.taskList.findIndex((task) => task.taskId===id);
    this.taskList[ind2].status = "pending";
  }
}

class Task {
  taskId: number;
  taskTitle: string;
  taskData: string;
  dueDate: Date;
  status: string;

  constructor(id: number, title: string, data: string, date: Date, stat: string) {
    this.taskId = id;
    this.taskTitle = title;
    this.taskData = data;
    this.dueDate = date;
    this.status = stat;
  }
}