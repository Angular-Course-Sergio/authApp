import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environments';
import { User } from '../interfaces';
import { AuthStatus } from '../enums/auth-status.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.base_url;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    return of(true);
  }
}
