import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ServerResponse} from '../models/server.response';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Handler} from "../exceptions/handler";


@Injectable({
  providedIn: 'root'
})

export class CoreHttpService {
  API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) {
  }

  getLocations(type: string | undefined): Observable<ServerResponse> {
    const params = new HttpParams().set('type', String(type));
    const url = this.API_URL + '/locations';
    return this.httpClient.get<ServerResponse>(url, {params})
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }
}
