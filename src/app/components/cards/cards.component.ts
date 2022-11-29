import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TelacardComponent } from '../telacard/telacard.component';


export interface CardInterface {
  title: string;
  description: string;
  button: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})



export class CardsComponent implements OnInit{


  public listOfCards: Array<CardInterface> = [
    {
    "title": "Curso de javascript basico",
    "description":"Curso de javascript para iniciantes",
    "button": "Botao do Thiago"
    },
    {
      "title": "Curso de Banco da dados basico",
      "description":"Curso de javascript para iniciantes",
      "button": "Botao do Thiago"
    },
    {
      "title": "Curso de Data science basico",
      "description":"Curso de javascript para iniciantes",
      "button": "Botao do Thiago"
    },
];


  private constructor() {

  }


  ngOnInit(): void {
    // this.makeCards();
    console.log(this.listOfCards);
  }

  public clickHere(desc: string):void{
    console.log('funcion')
  }


}
