import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../interface";
import {baseURL, urls} from "../configs";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<IComments[]> {
    return this.httpClient.get<IComments[]>(`${baseURL}${urls.comments}`)
  }

  getById(id: number): Observable<IComments> {
    return this.httpClient.get<IComments>(`${baseURL}${urls.comments}/${id}`)
  }

}
