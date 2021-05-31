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
  text: string = "pet"
  constructor() { }

  ngOnInit(): void {
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
      data: "24/08/2020",
      raca:"SRD",
      idade: 2,
      porte: "Grande",
      obs: "Muito dócil"

    },
    {
      nome: "Mingau",
      tipo: "Cachorro",
      data: "07/06/2019",
      raca:"SRD",
      idade: 2,
      porte: "Médio",
      obs: ""

    },
    {
      nome: "Mel",
      tipo: "Cachorro",
      data: "03/05/2020",
      raca:"SRD",
      idade: 3,
      porte: "Pequeno",
      obs: "Gosta de crianças"

    },
    {
      nome: "Alemão",
      tipo: "Gato",
      data: "19/09/2020",
      raca:"SRD",
      idade: 5,
      porte: "Pequeno",
      obs: "Muito dócil"
    },
    {
      nome: "Nikita",
      tipo: "Gato",
      data: "14/06/2018",
      raca:"SRD",
      idade: 2,
      porte: "Pequeno",
      obs: "Muita energia, brinca bastante"

    }
  ]

  contacts = [

    {
    name: "Alemão",
    tipo: "Gato"
   },
   {
    name: "Borba",
    tipo: "Gato"
   },
   {
    name: "Lily",
    tipo: "Gato"
   },
   {
    name: "Marshmellow",
    tipo: "Gato"
   },
  ]

  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
  ]

}
