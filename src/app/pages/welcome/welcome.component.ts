import {Component} from '@angular/core';
import {ConfigurationService} from '../../core/domain/services/configuration.service';

@Component({
  selector: 'welcome-component',
  templateUrl: 'welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  public isMobile: boolean = false;

  constructor(private configurationService: ConfigurationService) {
    this.isMobile = this.configurationService.isPhone;
    console.log( this.isMobile)
  }

}
