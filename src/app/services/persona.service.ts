import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  uri =`${global.url}/persona/`;
  constructor(private http: HttpClient) { }
  
  public listarPersona():Observable<any>{
    return this.http.get<any>(this.uri)
  }

  public post(persona:any):Observable<any>{
    return this.http.post<any>(this.uri, persona)
  }
}
