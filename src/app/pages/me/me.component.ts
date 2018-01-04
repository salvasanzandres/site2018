import {Component} from "@angular/core";

@Component({
    selector: 'me-component',
    templateUrl: 'me.component.html',
    styleUrls: ['./me.component.css']
})
export class MeComponent {
  data: any;
  data2: any;
  data3: any;

  constructor() {
    this.data = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    this.data2 = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };

    this.data3 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }

}
