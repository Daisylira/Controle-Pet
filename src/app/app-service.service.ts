import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

enum AppEdnpoints {
  animais = 'api/animais',
  medicamentos = 'api/medicamentos',
}
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly urlControlePet = 'https://controlepet.azurewebsites.net/'

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': '*/*',
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    })
  }

  constructor(private http: HttpClient) { }

  // Animais

  public getAnimais(): Observable<any> {
    return this.http.get(`${this.urlControlePet}${AppEdnpoints.animais}`)
  }

  public postAnimais(body: any): Observable<any> {
    return this.http.post(`${this.urlControlePet}${AppEdnpoints.animais}/cadastro`, body, this.httpOptions)
  }

  public putAnimais(id: string, body: any): Observable<any> {
    return this.http.put(`${this.urlControlePet}${AppEdnpoints.animais}/${id}`, body, this.httpOptions)
  }


  // Medicamentos

  public getMedicamentos(): Observable<any> {
    return this.http.get(`${this.urlControlePet}${AppEdnpoints.medicamentos}`, this.httpOptions)
  }

  public postMedicamentos(body: any): Observable<any> {
    return this.http.post(`${this.urlControlePet}${AppEdnpoints.medicamentos}/cadastro`, body, this.httpOptions)
  }

  public putMedicamentos(id: string, body: any): Observable<any> {
    return this.http.put(`${this.urlControlePet}${AppEdnpoints.medicamentos}/${id}`, body, this.httpOptions)
  }


  // Delete
  public delete(url:string, id: string): Observable<any> {
    return this.http.delete(`${this.urlControlePet}${url}/${id}`, this.httpOptions)
  } 
}
