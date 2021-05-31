import { Component, OnInit } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-medicamentos-edit-modal',
  templateUrl: './medicamentos-edit-modal.component.html',
  styleUrls: ['./medicamentos-edit-modal.component.scss']
})
export class MedicamentosEditModalComponent implements OnInit {

  title: string;
  closeBtnName: string;
  text: string;
  faTimes = faTimes
  item
  modaltext: boolean = true;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
  }

}
