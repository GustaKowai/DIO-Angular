import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {
  @Input() corDeFundo:string = 'yellow';
  @Input() corDoTexto:string = 'white';

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    
  }
}
