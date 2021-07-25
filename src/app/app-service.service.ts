import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

enum AppEdnpoints {
  animais = 'api/animais',
  medicamentos = 'api/medicamentos',
}
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly urlControlePet = 'https://controlepet.azurewebsites.net/'

  constructor( private http: HttpClient) { }

  getAnimais () {
    const httpOptions = {
      headers: new HttpHeaders({
        accept: '*/*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': "*"
        
      })
    }
    return this.http.get(`${this.urlControlePet}${AppEdnpoints.animais}`, httpOptions)
  }

  
  postAnimais( body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      })
    }
    return this.http.post(`${this.urlControlePet}${AppEdnpoints.animais}`, body, httpOptions)
  }


}
