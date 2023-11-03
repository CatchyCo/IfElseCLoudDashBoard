import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-list-details',
  templateUrl: './user-list-details.component.html',
  styleUrls: ['./user-list-details.component.scss']
})
export class UserListDetailsComponent  implements OnChanges {
@Input() userDetails = {
  id :'',
  picture:'',
  progress:0,
  isActive:false,
  country:'',
  name:''
}

ngOnChanges(changes: SimpleChanges): void {
  if (changes?.['userDetails'].currentValue.length) {
    console.log(this.userDetails)
  }
}

}
