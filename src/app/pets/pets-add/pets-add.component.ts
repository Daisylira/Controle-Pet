import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pets-add',
  templateUrl: './pets-add.component.html',
  styleUrls: ['./pets-add.component.scss']
})
export class PetsAddComponent implements OnInit {
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
