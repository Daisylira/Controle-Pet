import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-pets-add',
  templateUrl: './pets-add.component.html',
  styleUrls: ['./pets-add.component.scss']
})
export class PetsAddComponent implements OnInit {

  faTimes = faTimes;
  item: any;
  addPetForm: FormGroup;
  mgs: string;
  submitform: boolean;
  @Output() added: EventEmitter <boolean> = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private appService: AppServiceService
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm(): void {
    this.addPetForm = this.fb.group(
      {
        nome: [null, Validators.required],
        tipo: [null, Validators.required],
        raca: [null, Validators.required],
        idade: [null, Validators.required],
        dataCadastro: [null, Validators.required],
        porte: [null, Validators.required],
        disponibilidade: [null, Validators.required],
        observacoes: [""],
      }
    )
  }

  public sendAdd(): void {
    this.submitform = true;
    this.mgs = "Aguarde enquanto o cadastro está sendo realizado."
    this.changeForm();
    this.appService.postAnimais(this.addPetForm.value)
      .subscribe(res => {
        this.mgs = "O cadastro foi realizado com sucesso!"
        this.added.emit(true)
      },
        () => {
          this.mgs = "Erro ao cadastrar, por favor tente novamente."
        },
      );
    this.addPetForm.reset()

  }

  changeForm() {
    // this.addPetForm.value.dataCadastro = `${this.addPetForm.value.dataCadastro}T00:00:00.325Z`
    this.addPetForm.value.idade = parseInt(this.addPetForm.value.idade)
  }

}