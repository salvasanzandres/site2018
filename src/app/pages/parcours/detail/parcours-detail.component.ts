import {Component} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'parcours-detail-component',
  templateUrl: './parcours-detail.component.html'
})
export class ParcoursDetailComponent{
  public heroes: any;
  public selectedId: any;

  constructor(private route: ActivatedRoute){
    this.heroes = this.route.params.subscribe((params: any) => {
      this.selectedId = params['id']
      });

  }

}
