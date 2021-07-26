import { Component, OnInit } from '@angular/core';
import { faPen, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppServiceService } from '../app-service.service';
import { ExclusionModalComponent } from '../shared/exclusion-modal/exclusion-modal.component';
import { MedicamentosAddComponent } from './medicamentos-add/medicamentos-add.component';
import { MedicamentosEditModalComponent } from './medicamentos-edit-modal/medicamentos-edit-modal.component';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent implements OnInit {

  theadColor: string = "thead-color-grey";
  placeHolderContent: string = "Pesquise o medicamento aqui"
  title: string;
  text: string
  medicamentos: any
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  faSearch = faSearch
  bsModalRef: BsModalRef;
  searchText: any = { nome: '' };
  loading: boolean = true;

  constructor(
    private appService: AppServiceService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getMedicamentos()
  }

  private getMedicamentos(): void {
    this.appService.getMedicamentos().subscribe((res: any) => {
      this.medicamentos = res;
      this.loading = false
    })
  }

  public openModalDelete(item: any): void {

    const initialState = {
      title: 'Deletar',
      text: this.text,
      item: item,
      url: 'api/medicamentos'
    };

    this.bsModalRef = this.modalService.show(ExclusionModalComponent, { initialState, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.deleted.subscribe((res: boolean) => {
      if (res) {
        this.getMedicamentos()
      }
    });
  }

  public openEdit(item: any): void {

    const initialState = {
      title: 'Editar',
      text: this.text,
      item: item
    };
    this.bsModalRef = this.modalService.show(MedicamentosEditModalComponent, { initialState, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.edited.subscribe((res: boolean) => {
      if (res) {
        this.getMedicamentos()
      }
    });
  }

  public openAdd(): void {

    this.bsModalRef = this.modalService.show(MedicamentosAddComponent, { class: 'modal-lg' });

    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.added.subscribe((res: boolean) => {
      if (res) {
        this.getMedicamentos()
      }
    });


  }

  listTitle = [
    {title: "Medicamento"},
    {title: "Quantidade"},
    {title: "Validade"},
    {title: "Edição"},
  ]

  
}
