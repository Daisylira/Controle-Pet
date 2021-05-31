import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-medicamentos-add',
  templateUrl: './medicamentos-add.component.html',
  styleUrls: ['./medicamentos-add.component.scss']
})
export class MedicamentosAddComponent implements OnInit {

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
