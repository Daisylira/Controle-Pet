import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, BaseChartDirective } from 'ng2-charts';
import { AppServiceService } from '../app-service.service';
import { PetDisponibilidade, PetTipo } from '../pets/utils/pet-tipo.enum';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {

  animais: any
  disponibilidade: any;

  tipoAnimal: any[];
  view: any[] = [600, 500];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: string = 'below';

  colorTipoAnimal = {
    domain: ['#89D5C9', '#FAC172', '#E25B45', '#ADC865']
  };

  colorDisponibilidade = {
    domain: ['#264653', '#e76f51']
  };
  faAngleRight = faAngleRight
  constructor(
    private appService: AppServiceService,
  ) {  }

  ngOnInit(): void {
    this.getAnimais()
  }


  private getAnimais() {
    this.appService.getAnimais().subscribe((res: any) => {
      this.animais = res;
      this.filterTipoAnimais(this.animais.content);
      this.filterDisponibilidadeAnimais(this.animais.content);
    })
  }

  private filterTipoAnimais(animais: any) {

    const cachorro = animais.filter(item => item.tipo === PetTipo.CACHORRO)
    const qtdcachorro = cachorro.length

    const gato = animais.filter(item => item.tipo === PetTipo.GATO)
    const qtdgato = gato.length

    const passaro = animais.filter(item => item.tipo === PetTipo.PASSARO)
    const qtdpassaro = passaro.length

    const peixe = animais.filter(item => item.tipo === PetTipo.PEIXE)
    const qtdpeixe = peixe.length

    this.tipoAnimal = [
    {
      "name": "Cachorro",
      "value": qtdcachorro
    },
    {
      "name": "Gato",
      "value": qtdgato
    },
    {
      "name": "Pássaro",
      "value": qtdpassaro
    },
    {
      "name": "Peixe",
      "value": qtdpeixe
    },
    ]
  }

  private filterDisponibilidadeAnimais(animais: any) {

    const disponivel = animais.filter(item => item.disponibilidade === PetDisponibilidade.DISPONIVEL)
    const qtddisponivel = disponivel.length

    const indisponivel = animais.filter(item => item.disponibilidade === PetDisponibilidade.INDISPONIVEL)
    const qtdindisponivel = indisponivel.length
    this.disponibilidade = 
    [
      {
        "name": "Disponível",
        "value": qtddisponivel
      },
      {
        "name": "Indisponível",
        "value": qtdindisponivel
      },
      ]
  }

  
 


}

