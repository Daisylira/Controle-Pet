import { Component, OnInit } from '@angular/core';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  theadColor: string = "thead-color-orange";
  placeHolderContent: string = "Pesquise o pet aqui"
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.placeHolderContent)

  }

  listTitle = [
    {title: "Nome"},
    {title: "Tipo"},
    {title: "Entrada"},
    {title: "Edição"},
  ]

  
  listPet = [
    {
      nome: "Laika",
      tipo: "Cachorro",
      data: "24/08/2020"

    },
    {
      nome: "Mingau",
      tipo: "Cachorro",
      data: "07/06/2019"

    },
    {
      nome: "Mel",
      tipo: "Cachorro",
      data: "03/05/2020"

    },
    {
      nome: "Alemão",
      tipo: "Gato",
      data: "19/09/2020"

    },
    {
      nome: "Nikita",
      tipo: "Gato",
      data: "14/06/2018"

    }
  ]


}
