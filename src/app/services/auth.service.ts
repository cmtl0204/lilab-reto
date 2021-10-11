import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() {
  }

  get apiId(): string {
    return environment.APP_ID;
  }
}
