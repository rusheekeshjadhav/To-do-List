import { Component, Input } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent {

  @Input() due: string = "pending";

  constructor(private ls: ListComponent) { }

  get List(){
    return this.ls.List;
  }

}
