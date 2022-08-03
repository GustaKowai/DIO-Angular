import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count:number = 0;
  nome:string = 'Gustavo Moreira Gregorio';
  text:string = '';
  pessoas = [
    {
      nome: "Gustavo",
      sobrenome: "Gregorio"
    },
    {
      nome: "Felipe",
      sobrenome: "Gregorio"      
    },
    {
      nome: "Daniela",
      sobrenome: "Noschang"      
    },
    {
      nome: "Gagato",
      sobrenome: "Absoluto"      
    }
  ]

  constructor(){

  }

  ngOnInit():void{
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval)
      }
    }, 1000)
  }


  clicou(nome:string):void{
    console.log(nome, 'clicou em mim!')
  }
}
