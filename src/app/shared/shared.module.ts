import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCardsComponent } from '../top-cards/top-cards.component';
import { GenericTableComponent } from './component/generic-table/generic-table.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserListDetailsComponent } from './component/user-list-details/user-list-details.component';

const components = [
  TopCardsComponent,
  GenericTableComponent,
  UserListComponent,
  UserListDetailsComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
