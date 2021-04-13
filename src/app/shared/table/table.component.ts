import { Component, Input, OnInit } from '@angular/core';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input () listTitle: any
  @Input () listContent: any
  faPen = faPen
  faTrashAlt = faTrashAlt

  constructor() { }

  ngOnInit(): void {
  }

}
