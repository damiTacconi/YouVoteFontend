import { Injectable } from '@angular/core';
import { FormData } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public  redirectUrl: string =  '';
  
  private readonly AUTH_TOKEN: string = 'token';

  constructor() { }

  isLogged(): boolean { 
    return localStorage.getItem(this.AUTH_TOKEN) != null;
  }

}
