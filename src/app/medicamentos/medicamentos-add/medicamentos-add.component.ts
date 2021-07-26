import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-medicamentos-add',
  templateUrl: './medicamentos-add.component.html',
  styleUrls: ['./medicamentos-add.component.scss']
})
export class MedicamentosAddComponent implements OnInit {

  faTimes = faTimes  
  addMedicamentoForm: FormGroup;
  item: any;
  mgs: string;
  submitform: boolean;
  @Output() added: EventEmitter <boolean> = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private appService: AppServiceService

    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.addMedicamentoForm = this.fb.group(
      {
        nome: [null, Validators.required],
        lote: [null, Validators.required],
        dataValidade: [null, Validators.required],
        quantidade: [null, Validators.required],
        disponibilidade: [null, Validators.required],
        observacoes: [null],
      }
    )
  }

  public sendEdit(): void {
    this.submitform = true;
    this.mgs = "Aguarde enquanto o cadastro está sendo realizado."
    this.changeForm();
    this.appService.postAnimais(this.addMedicamentoForm.value)
      .subscribe(res => {
        this.mgs = "O cadastro foi realizado com sucesso!";
        this.added.emit(true)

      },
        () => {
          this.mgs = "Erro ao cadastrar, por favor tente novamente."
        },
      );
    this.addMedicamentoForm.reset()

  }

  changeForm() {
    // this.addMedicamentoForm.value.dataCadastro = `${this.addMedicamentoForm.value.dataCadastro}T00:00:00.325Z`
    this.addMedicamentoForm.value.quantidade = parseInt(this.addMedicamentoForm.value.quantidade)
  }
}
