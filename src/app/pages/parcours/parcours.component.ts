import {Component} from "@angular/core";

@Component({
  selector: 'parcours-component',
  templateUrl: './parcours.component.html'
})
export class ParcoursComponent {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'white'},
    {text: 'Two', cols: 1, rows: 2, color: 'white'},
    {text: 'Three', cols: 1, rows: 1, color: 'white'},
    {text: 'Four', cols: 2, rows: 1, color: '#white'},
  ];
  constructor(){}

}
