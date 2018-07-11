import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    /*Post these details to API Server and return user info if it's correct*/
    return this.http.post('/api/auth.php', {
      username,
      password
    });
  }
}
