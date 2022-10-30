import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interface/post.interface";
import {baseURL, urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${baseURL}${urls.posts}`)
  }

  getById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`${baseURL}${urls.posts}/${id}`)
  }
}
