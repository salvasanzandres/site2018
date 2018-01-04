import {Component, Input} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Experience, EXPERIENCES} from '../../../core/domain/models/experience.model';


@Component({
  selector: 'app-parcours-detail',
  templateUrl: './parcours-detail.component.html',
  styleUrls: ['./parcours-detail.component.css']
})
export class ParcoursDetailComponent {

  public exp: any;
  public experiences: Experience[];

  constructor(private route: ActivatedRoute) {
    this.experiences = EXPERIENCES;
    this.route.params.subscribe( response => {
      this.exp = response ? EXPERIENCES[response['id']] : null;
      console.log(this.exp);
    });
  }

  getPreviousId(): number {
    return this.exp.id == 0 ? -1 : this.exp.id - 1  ;
  }
  getNextId(): number {
    return this.exp.id + 1 == EXPERIENCES.length ? -1 : this.exp.id + 1  ;
  }

}
