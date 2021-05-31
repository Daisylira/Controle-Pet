import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exclusion-modal',
  templateUrl: './exclusion-modal.component.html',
  styleUrls: ['./exclusion-modal.component.scss']
})
export class ExclusionModalComponent implements OnInit {

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
