import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MedicamentosEditModalComponent } from 'src/app/medicamentos/medicamentos-edit-modal/medicamentos-edit-modal.component';
import { PetsEditComponent } from 'src/app/pets/pets-edit/pets-edit.component';
import { ExclusionModalComponent } from '../exclusion-modal/exclusion-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input () listTitle: any;
  @Input () listContent: any;
  @Input () theadColor: string;
  @Input () title: string;
  @Input () text: string;
  @Input () editPage: string;
  faPen = faPen;
  faTrashAlt = faTrashAlt;

  bsModalRef: BsModalRef;
  searchText: string

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModalDelete(item){

    const initialState = {     
      title: this.title,
      text: this.text,
      item: item
    };

    this.bsModalRef = this.modalService.show(ExclusionModalComponent, {initialState, class: 'modal-lg'});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openEdit(item){
    if (this.editPage === 'pets') {
      const initialState = {     
        title: this.title,
        text: this.text,
        item: item
      };
      this.bsModalRef = this.modalService.show(PetsEditComponent, {initialState, class: 'modal-lg'});
      this.bsModalRef.content.closeBtnName = 'Close';
    }

  else  if (this.editPage === 'medicamentos') {
      const initialState = {     
        title: this.title,
        text: this.text,
        item: item
      };
      this.bsModalRef = this.modalService.show(MedicamentosEditModalComponent, {initialState, class: 'modal-lg'});
      this.bsModalRef.content.closeBtnName = 'Close';
    }

  }
}


