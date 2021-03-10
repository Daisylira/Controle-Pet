import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchComponent } from '../search/search.component';
import { TableComponent } from '../table/table.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';



@NgModule({
  declarations: [PaginationComponent, SearchComponent, TableComponent, ConfirmationModalComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
