import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent{
  @Input() tasks: string[] ;
  @Input() title: string;

  constructor(){}
}
