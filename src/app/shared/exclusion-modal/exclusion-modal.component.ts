import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';
import { AppServiceService } from 'src/app/app-service.service';
import { TitleCasePipe } from '@angular/common';

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
  item: any;
  editPetForm: FormGroup;
  mgs: string;
  submitform: boolean;
  url: string;

  constructor(
    public bsModalRef: BsModalRef,
    private appService: AppServiceService
  ) { }

  ngOnInit(): void {
  }

  public sendDelete(): void {
    this.submitform = true;
    this.mgs = "Aguarde enquanto os dados estão sendo alterados."
    this.appService.delete(this.url, this.item?.id)
      .subscribe(res => {
        let nome = new TitleCasePipe().transform(this.item?.nome)
        this.mgs = `A exclusão do ${nome} foi realizada com sucesso!`
      },
        () => {
          this.mgs = "Erro ao alterar o cadastro, por favor tente novamente."
        }
      );
  }

}
