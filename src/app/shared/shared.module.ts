import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PaginationComponent } from './pagination/pagination.component';

import { ExclusionModalComponent } from './exclusion-modal/exclusion-modal.component';
import { FormsModule } from '@angular/forms';
import { ListFilterPipe } from './utils/filter.pipe';



@NgModule({
  declarations: [
    PaginationComponent, 
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
    ExclusionModalComponent,
    ListFilterPipe
  ]
})
export class SharedModule { }
