import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interface";
import {baseURL, urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${baseURL}${urls.users}`)
  }

  getById(id:number): Observable<IUser>{
    return  this.httpClient.get<IUser>(`${baseURL}${urls.users}/${id}`)
}
}