import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MedicamentosAddComponent } from 'src/app/medicamentos/medicamentos-add/medicamentos-add.component';
import { PetsAddComponent } from 'src/app/pets/pets-add/pets-add.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() placeHolderContent: string;
  faSearch = faSearch
  searchText = '';
  bsModalRef: BsModalRef;

  @Input() addPage: string;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: BsModalService) {}


  ngOnInit() {
    
  }


  openAdd(){
    console.log(this.addPage)
    if (this.addPage === 'pets') {

      this.bsModalRef = this.modalService.show(PetsAddComponent, {  class: 'modal-lg'});
      this.bsModalRef.content.closeBtnName = 'Close';
    }

  else  if (this.addPage === 'medicamentos') {
 
      this.bsModalRef = this.modalService.show(MedicamentosAddComponent, {       class: 'modal-lg'});
      this.bsModalRef.content.closeBtnName = 'Close';
    }

  }

}

