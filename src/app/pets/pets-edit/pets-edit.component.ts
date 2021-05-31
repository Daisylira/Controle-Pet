import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pets-edit',
  templateUrl: './pets-edit.component.html',
  styleUrls: ['./pets-edit.component.scss']
})
export class PetsEditComponent implements OnInit {

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
