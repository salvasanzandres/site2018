import {Component, HostListener, ViewEncapsulation} from '@angular/core';

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
  foods = [
    {value: 'steak-0', viewValue: 'Now press ESC'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.isPhone = this.innerWidth < 400;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isPhone = this.innerWidth < 400;
  }
}
