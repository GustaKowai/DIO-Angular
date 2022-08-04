import { Component, OnInit } from '@angular/core';
import { Book } from './model/livro';
import { ProductListService } from './product-list.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  livros:Array<Book> = []
  productListService: ProductListService

  constructor(productListService: ProductListService) { 

    this.productListService = productListService
  }

  ngOnInit(): void {

    this.productListService.getBook().subscribe(data=>{
      this.livros =  this.livros = this.formataPrecos(data.books.splice(0, 15));
      console.log(this.livros);
    })

  }

  formataPrecos(lista: Array<Book>) {
    for (let i = 0; i < lista.length; i++) {
      const precoSemSimbolo = lista[i].price.substring(1);
      lista[i].priceInNumber = Number(precoSemSimbolo);
    }
    return lista;
  }

}
