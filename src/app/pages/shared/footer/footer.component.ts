import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public incrementExp :boolean = false;

  constructor(){}

  pepa(ev: any) {
    if(ev.value && !this.incrementExp) {
      this.incrementExp = true;
    }
  }
}
