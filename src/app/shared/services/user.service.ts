import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Store } from '../user.store';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser$: Observable<User> = this.http
                                   .get<User>('http://localhost:3000/users')
                                   .pipe(
                                       tap(user => this.store.set('user', user))
                                   );

  constructor(
      private http: HttpClient,
      private store: Store
  ) { }
}
