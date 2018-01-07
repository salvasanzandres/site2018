import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import {ConfigurationService} from "./core/domain/services/configuration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public innerWidth: any;
  public selectedLang: string = 'fr';
  public isActiveBurger: boolean = false;
  public routes: string[] = ['/me','/parcours','/projects'];

  constructor(private configurationService: ConfigurationService){}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.configurationService.isPhone = this.innerWidth <= 400;
    //opens subscription to selected lang - in synchro with BehaviourSubject
    this.configurationService.lang.subscribe((response) => {
      this.selectedLang = response;
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.configurationService.isPhone = this.innerWidth < 400;
  }

  changeLang(ln: string){
    this.configurationService.setLanguage(ln);
  }

  switchBurger(){
    this.isActiveBurger = ! this.isActiveBurger;
  }

}
