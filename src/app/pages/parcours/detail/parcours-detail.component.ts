import {Component, Input} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Experience} from "../../../core/domain/models/experience.model";


@Component({
  selector: 'parcours-detail-component',
  templateUrl: './parcours-detail.component.html'
})
export class ParcoursDetailComponent{

  @Input() public exp: Experience;

  constructor(){

  }

}
