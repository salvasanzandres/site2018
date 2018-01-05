import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent{
  @Input() max;
  @Input() libelle;
  public counter: number = 0
  public increment: boolean =  false;


  constructor(){
    if(!this.increment){
      let interval = setInterval(()=> {
        this.counter++;
        if(this.counter == this.max){
          clearInterval(interval);
        }
      },100);

    }
  }
}
