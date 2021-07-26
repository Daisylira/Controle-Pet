import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-pets-edit',
  templateUrl: './pets-edit.component.html',
  styleUrls: ['./pets-edit.component.scss']
})
export class PetsEditComponent implements OnInit {

  title: string;
  text: string;
  faTimes = faTimes;
  item: any;
  editPetForm: FormGroup;
  mgs: string;
  submitform: boolean;
  @Output() edited: EventEmitter <boolean> = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private appService: AppServiceService
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm(): void {
    this.editPetForm = this.fb.group(
      {
     //   id: this.item?.id,
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

  public sendEdit(): void {
    this.submitform = true;
    this.changeForm();
    this.mgs = "Aguarde enquanto os dados estão sendo alterados."
    this.appService.putAnimais(this.item?.id, this.editPetForm.value)
      .subscribe(res => {
        this.mgs = "O cadastro foi alterado com sucesso!"
         this.edited.emit(true)
      },
        () => {
          this.mgs = "Erro ao alterar o cadastro, por favor tente novamente."
        }
      );
      this.editPetForm.reset()
  }

  
  changeForm() {
    this.editPetForm.value.dataCadastro = "2021-07-26T22:00:59.963+00:00"
    this.editPetForm.value.idade = parseInt(this.editPetForm.value.idade)
    console.log(this.editPetForm.value)
  }

  
}
