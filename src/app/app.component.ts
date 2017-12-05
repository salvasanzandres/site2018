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
  public isPhone: boolean = false;
  public lng : string[] = ['en','fr','es'];
  public selectedLang: string = 'fr';

  constructor(private ConfigurationService: ConfigurationService){
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.isPhone = this.innerWidth < 400;

    this.ConfigurationService.lang.subscribe((response) => {
      this.selectedLang = response;
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isPhone = this.innerWidth < 400;
  }

  changeLang(ln: string){
    this.selectedLang = ln;
    this.ConfigurationService.setLanguage(ln);
  }
}
