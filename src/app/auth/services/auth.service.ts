import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.base_url;
  private http = inject(HttpClient);

  // private _currentUser = signal<User | null>(null);
  // private _authStatus = signal<AuthStatus>();

  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    return of(true);
  }
}
