import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Book } from './model/livro';
import { Observable } from 'rxjs';
import { BookList } from './model/lista-livro';

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  httpOptions= {
    Headers: new HttpHeaders({'content-type':'application/json'})
  }

  

  private url = 'https://api.itbook.store/1.0/new'

  constructor(private http:HttpClient) { }

  getBook():Observable<BookList>{
    console.log('aqui');
    return this.http.get<BookList>(this.url);
  }


}
