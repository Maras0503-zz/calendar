import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DbServiceService {
  ans;
  constructor(private http: Http) { }

  getUsers (): Observable <any> {
    return this.http.get('/api/users')
      .map((res: Response) => res.json());
  }
}
