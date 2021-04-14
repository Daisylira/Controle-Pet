import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent implements OnInit {

  theadColor: string = "thead-color-grey";
  placeHolderContent: string = "Pesquise o medicamento aqui"


  constructor() { }

  ngOnInit(): void {
  }

  listTitle = [
    {title: "Medicamento"},
    {title: "Quantidade"},
    {title: "Validade"},
    {title: "Edição"},
  ]

  
  listMedicamentos = [
    {
      nome: "Vacina Raiva",
      tipo: "18",
      data: "10/08/2022"

    },

    {
      nome: "FEVL",
      tipo: "09",
      data: "10/08/2025"

    },

    {
      nome: "Antiflamatório",
      tipo: "05",
      data: "03/05/2023"

    },

    {
      nome: "Vacina Raiva",
      tipo: "25",
      data: "10/08/2024"

    },

    {
      nome: "Vermífugo",
      tipo: "20",
      data: "10/08/2022"

    },


  ]

}
