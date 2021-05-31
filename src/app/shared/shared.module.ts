import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ExclusionModalComponent } from './exclusion-modal/exclusion-modal.component';
import { FormsModule } from '@angular/forms';
import { ListFilterPipe } from './utils/filter.pipe';



@NgModule({
  declarations: [
    PaginationComponent, 
    SearchComponent, 
    TableComponent, 
    ConfirmationModalComponent,
    ExclusionModalComponent,
    ListFilterPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports:[
    PaginationComponent, 
    SearchComponent, 
    TableComponent, 
    ConfirmationModalComponent,
    ExclusionModalComponent,
    ListFilterPipe
  ]
})
export class SharedModule { }
