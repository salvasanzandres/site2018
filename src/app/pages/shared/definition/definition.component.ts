import {Component, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent {
  @Input() word;
  @Input() text;

  constructor() {
  }
}
