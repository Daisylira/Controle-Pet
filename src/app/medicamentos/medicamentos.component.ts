import { Component, OnInit } from '@angular/core';

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
      data: "10/08/2022",
      lote: "N24550",
      quantidade: 10,
      obs: "2 Doses",
    },
    {
      nome: "FEVL",
      tipo: "09",
      data: "10/08/2025",
      lote: "N24550",
      quantidade: 24,
      obs: "",

    },
    {
      nome: "Antiflamatório",
      tipo: "05",
      data: "03/05/2023",
      lote: "L24550",
      quantidade: 12,
      obs: "A cada 12hrs",

    },
    {
      nome: "Vacina",
      tipo: "25",
      data: "10/08/2024",
      lote: "A4550",
      quantidade: 5,
      obs: "",

    },
    {
      nome: "Vermífugo",
      tipo: "20",
      data: "10/08/2022",
      lote: "B24550",
      quantidade: 10,
      obs: "2 Doses",

    },
  ]

  // [
  //   {
  //     "id": "60fd6fc6c5a6c27708418590",
  //     "nome": "Medicamento PNQJPACOEM",
  //     "lote": "5801 - WHXCK",
  //     "dataValidade": "2021-07-25T14:06:04.292+00:00",
  //     "quantidade": -44,
  //     "disponibilidade": "INDISPONIVEL",
  //     "observacoes": "DISPONIVEL"
  //   },
  //   {
  //     "id": "60fd9bf512d9eb25fd3f9a8f",
  //     "nome": "Medicamento MMRXYVNRYZ",
  //     "lote": "8735 - FCPVB",
  //     "dataValidade": "2021-07-25T17:14:35.950+00:00",
  //     "quantidade": 49,
  //     "disponibilidade": "DISPONIVEL",
  //     "observacoes": "INDISPONIVEL"
  //   }
  // ]

}
