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

export class PostHttpService {
  API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<ServerResponse> {
    const url = this.API_URL + '/post';
    return this.httpClient.get<ServerResponse>(url)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }

  getComments(postId: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/post/${postId}/comment`;
    return this.httpClient.get<ServerResponse>(url)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }

  getUser(userId: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/user/${userId}`;
    return this.httpClient.get<ServerResponse>(url)
      .pipe(
        map(response => {
          return {
            data: response
          }
        }),
        catchError(Handler.render)
      );
  }

  getPostsByTag(tag: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/tag/${tag}/post`;
    return this.httpClient.get<ServerResponse>(url)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }
}
