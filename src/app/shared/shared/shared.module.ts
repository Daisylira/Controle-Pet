import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PaginationComponent } from '../pagination/pagination.component';
import { SearchComponent } from '../search/search.component';
import { TableComponent } from '../table/table.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';



@NgModule({
  declarations: [
    PaginationComponent, 
    SearchComponent, 
    TableComponent, 
    ConfirmationModalComponent,
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    PaginationComponent, 
    SearchComponent, 
    TableComponent, 
    ConfirmationModalComponent,
  ]
})
export class SharedModule { }
