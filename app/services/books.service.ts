import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from '../shared/book';

@Injectable() 
export class BooksService {
  constructor(private http: Http) {
  }
  
  /**
   * Load books from the static books.json data, usually an API URL.
   * 
   * @return {Observable<Book[]>} A list of books.
   */
  getBooks(): Observable<Book[]> {
    return this.http.get('app/data/books.json')
      .map(res => res.json().data)
      .catch(res => console.log(res));
  }
}