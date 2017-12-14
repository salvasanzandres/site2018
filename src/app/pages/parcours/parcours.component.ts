import {Component} from "@angular/core";
import {Experience} from "../../core/domain/models/experience.model";
import {ConfigurationService} from "../../core/domain/services/configuration.service";

@Component({
  selector: 'parcours-component',
  templateUrl: './parcours.component.html'
})
export class ParcoursComponent {
  public experiences: Experience[];

  constructor(private configurationService: ConfigurationService){
    this.experiences = this.configurationService.getExperiences();
  }

}
