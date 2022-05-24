import { Component, Input } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent {
  numb: number = 0;
  flag!: boolean;

  constructor(private ls: ListService) { }

  get List() {
    return this.ls.List;
  }

  get Mess() {
    return this.ls.messege;
  }

  newTask(taskTitle: string, taskData: string, dueDate: string) {
    if (taskTitle && taskData && dueDate) {
      this.ls.messege = "";
      this.flag = true;

      this.List.forEach(element => {
        if (element.taskTitle === taskTitle) {
          this.ls.messege = "Duplicate Title !!!";
          this.flag = false;
        }
      });

      if (this.flag)
        this.ls.newTask({
          taskId: this.numb++,
          taskTitle: taskTitle,
          taskData: taskData,
          dueDate: new Date(dueDate),
          status: "pending"
        });

      (<HTMLInputElement>document.getElementById("inputText")).value = "";
      (<HTMLInputElement>document.getElementById("inputTextArea")).value = "";
      (<HTMLInputElement>document.getElementById("inputDate")).value = "";

    } else {
      this.ls.messege = "Enter the required data !!!";
    }
  }

  date() {
    return this.ls.date();
  }

  check(dued: Date): boolean {
    return this.ls.check(dued);
  }

  done(id: number) {
    this.ls.messege = "";
    this.ls.done(id);
  }

  pending(id: number) {
    this.ls.messege = "";
    this.ls.pending(id);
  }
}
