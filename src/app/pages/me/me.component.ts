import {Component} from "@angular/core";

@Component({
    selector: 'me-component',
    templateUrl: 'me.component.html',
    styleUrls: ['./me.component.css']
})
export class MeComponent {
  data3: any;

  constructor() {


    this.data3 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'A',
          backgroundColor: '#F3CF55',
          borderColor: 'white',
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'B',
          backgroundColor: 'red',
          borderColor: 'white',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }

}
