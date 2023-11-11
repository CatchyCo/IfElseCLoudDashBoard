import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent implements OnChanges {

  @Input() cartData :any;


  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['cartData'].currentValue.length){
        console.log(this.cartData);
    }
  }

}
