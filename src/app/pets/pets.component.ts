import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppServiceService } from '../app-service.service';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PetsEditComponent } from './pets-edit/pets-edit.component';
import { ExclusionModalComponent } from '../shared/exclusion-modal/exclusion-modal.component';
import { PetsAddComponent } from './pets-add/pets-add.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  theadColor: string = "thead-color-orange";
  placeHolderContent: string = "Pesquise o pet aqui"
  text: string = "pet"
  animais: any
  listContent: any;

  faPen = faPen;
  faTrashAlt = faTrashAlt;
  faSearch = faSearch
  bsModalRef: BsModalRef;
  searchText: any = { nome: '' };
  loading: boolean = true;
  @Output() haspet: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private appService: AppServiceService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getAnimais()
  }

  private getAnimais() {
    this.appService.getAnimais().subscribe((res: any) => {
      this.animais = res;
      this.loading = false
    })
  }

  openModalDelete(item: any) {

    const initialState = {
      title: 'Deletar',
      text: this.text,
      item: item,
      url: 'api/animais'
    };

    this.bsModalRef = this.modalService.show(ExclusionModalComponent, { initialState, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.deleted.subscribe((res: boolean) => {
      if (res) {
        this.getAnimais()
      }
    });
  }

  openEdit(item: any) {

    const initialState = {
      title: 'Editar',
      text: this.text,
      item: item
    };
    this.bsModalRef = this.modalService.show(PetsEditComponent, { initialState, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.edited.subscribe((res: boolean) => {
      if (res) {
        this.getAnimais()
      }
    });

  }

  public openAdd(): void {

    this.bsModalRef = this.modalService.show(PetsAddComponent, { class: 'modal-lg' });

    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.added.subscribe((res: boolean) => {
      if (res) {
        this.getAnimais()
      }
    });


  }


  listTitle = [
    { title: "Nome" },
    { title: "Tipo" },
    { title: "Entrada" },
    { title: "Edição" },
  ]


  listPet = {
    "content": [
      {
        "id": "60fda06012d9eb25fd3f9a90",
        "nome": "Luna",
        "tipo": "GATO",
        "raca": "SDR",
        "idade": 2,
        "porte": "PEQUENO",
        "disponibilidade": "DISPONIVEL",
        "dataCadastro": "2021-07-30T00:00:00.000+00:00",
        "observacoes": "Teste do novo cadastro de animais"
      },
      {
        "id": "60fda06012d9eb25fd3f9a91",
        "nome": "Orion",
        "tipo": "GATO",
        "raca": "SDR",
        "idade": 2,
        "porte": "PEQUENO",
        "disponibilidade": "EM_TRATAMENTO",
        "dataCadastro": "2021-07-30T00:00:00.000+00:00",
        "observacoes": "Teste do novo cadastro de animais"
      },
      {
        "id": "60fda06012d9eb25fd3f9a92",
        "nome": "Lily",
        "tipo": "GATO",
        "raca": "SDR",
        "idade": 2,
        "porte": "PEQUENO",
        "disponibilidade": "DISPONIVEL",
        "dataCadastro": "2021-07-30T00:00:00.000+00:00",
        "observacoes": "Teste do novo cadastro de animais"
      },
      {
        "id": "60fda06012d9eb25fd3f9a93",
        "nome": "Thor",
        "tipo": "Cachorro",
        "raca": "SDR",
        "idade": 2,
        "porte": "GRANDE",
        "disponibilidade": "DISPONIVEL",
        "dataCadastro": "2021-07-30T00:00:00.000+00:00",
        "observacoes": "Teste do novo cadastro de animais"
      }
    ],
    "pageable": {
      "sort": {
        "sorted": true,
        "unsorted": false,
        "empty": false
      },
      "offset": 0,
      "pageNumber": 0,
      "pageSize": 10,
      "paged": true,
      "unpaged": false
    },
    "last": true,
    "totalPages": 1,
    "totalElements": 1,
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "size": 10,
    "number": 0,
    "first": true,
    "numberOfElements": 1,
    "empty": false
  }



}
