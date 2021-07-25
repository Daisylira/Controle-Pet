import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  faTimes = faTimes;
  item: any
  modaltext: boolean = true;
  editPetForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
  this.buildForm()
  }

  buildForm(){
    this.editPetForm = this.fb.group(
      {
        nome: [this.item?.nome, Validators.required],
        tipo: [this.item?.tipo, Validators.required],
        raca: [this.item?.raca, Validators.required],
        idade: [this.item?.idade, Validators.required],
        dataCadastro: [this.item?.dataCadastro, Validators.required],
        porte: [this.item?.porte, Validators.required],
        disponibilidade: [this.item?.disponibilidade, Validators.required],
        observacoes: [this.item?.observacoes],

      }
    )
  }


  tratamento(){
    // this.optionsTipoPet.filter(val=> val.selected === true).map(data =>data.label)
    // const initialValue
    // this.optionsTipoPet.find(opt => opt === initialValue)

    this.optionsTipoPet.forEach(element => {
      if (element.value === this.item) {
        element.selected = true
      }

    });

  }

  putAnimal(){

  }





  optionsStatus = [
    // {id: 1, value: "DISPONIVEL", label: "Disponível"},
    // {id: 2, value: "EM_TRATAMENTO", label: "Em tratamento"},
    // {id: 3, value: "RESERVADO", label: "Reservado"},
    // {id: 4, value: "DOADO", label: "Doado"}
    {id: 1, value: "DISPONIVEL", label: "Disponível"},
    {id: 2, value: "EM_TRATAMENTO", label: "Em tratamento"},
    {id: 3, value: "RESERVADO", label: "Reservado"},
    {id: 4, value: "DOADO", label: "Doado"}
  ]

  optionsTipoPet = [
   // {id: 1, value: null, label: "Selecione uma opção"},
    {id: 2, value: "GATO", label: "Gato", selected: },
    {id: 3, value: "CACHORRO", label: "Cachorro"},
    {id: 4, value: "PASSARO", label: "Passáro"},
    {id: 5, value: "PEIXE", label: "Peixe"}
  ]

  optionsPorte = [
    {id: 1, value: null, label: "Selecione uma opção"},
    {id: 1, value: "PEQUENO", label: "Pequeno"},
    {id: 1, value: "MEDIO", label: "Médio"},
    {id: 1, value: "GRANDE", label: "Grande"},
  ]

}
