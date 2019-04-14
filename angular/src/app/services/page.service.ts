import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PageService {

  constructor(private http: HttpClient) { }

  public pagesBS = new BehaviorSubject(null);

  getPages(){
    return this.http.get('http://localhost:3000/pages');
  }
}
