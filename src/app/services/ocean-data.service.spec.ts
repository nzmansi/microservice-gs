import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OceanDataService {

  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/api'; // Base URL da API

  constructor(private http: HttpClient) { }

  getOceanData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ocean-data`); // Ajuste o endpoint conforme necessário
  }

  // Adicione métodos adicionais conforme necessário para outras requisições à API
}
