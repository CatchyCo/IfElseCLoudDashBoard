import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnChanges {
  @Input() userData = [];

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['userData'].currentValue.length) {
      console.log(this.userData)
    }
  }
}
