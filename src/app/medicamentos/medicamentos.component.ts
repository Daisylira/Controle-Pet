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

}
