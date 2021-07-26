import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-medicamentos-edit-modal',
  templateUrl: './medicamentos-edit-modal.component.html',
  styleUrls: ['./medicamentos-edit-modal.component.scss']
})
export class MedicamentosEditModalComponent implements OnInit {

  title: string;
  text: string;
  faTimes = faTimes;
  item: any;
  editMedicamentoForm: FormGroup;
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
    this.editMedicamentoForm = this.fb.group(
      {
        nome: [this.item?.nome, Validators.required],
        lote: [this.item?.lote, Validators.required],
        quantidade: [this.item?.quantidade, Validators.required],
        dataValidade: [this.item?.dataValidade, Validators.required],
        disponibilidade: [this.item?.disponibilidade, Validators.required],
        observacoes: [this.item?.observacoes],
      }
    )
  }

  public sendEdit(): void {
    this.submitform = true;
    this.changeForm();
    this.mgs = "Aguarde enquanto os dados estão sendo alterados."
    this.appService.putMedicamentos(this.item?.id, this.editMedicamentoForm.value)
      .subscribe(res => {
        console.log(res)
        this.mgs = "O cadastro foi alterado com sucesso!";
        this.edited.emit(true)
      },
        () => {
          this.mgs = "Erro ao alterar o cadastro, por favor tente novamente."
        }
      );
      this.editMedicamentoForm.reset()
  }

  
  changeForm() {
    this.editMedicamentoForm.value.dataValidade = "2020-12-31T00:00:00.000+00:00"
    this.editMedicamentoForm.value.idade = parseInt(this.editMedicamentoForm.value.idade)
  }

}
