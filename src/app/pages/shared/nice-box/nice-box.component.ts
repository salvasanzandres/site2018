import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-nice-box',
  templateUrl: './nice-box.component.html',
  styleUrls: ['./nice-box.component.scss']
})
export class NiceBoxComponent {
  @Input() word;
  @Input() text;

  constructor() {
  }
}
