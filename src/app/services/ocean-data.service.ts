import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OceanDataService {

  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<any> {
    return this.httpClient.get('https://fiap-3sis-gs-20241.azurewebsites.net/index.html');
  }

  filterData(filters: any): Observable<any> {
    // Implementar lógica para filtrar dados com base nos filtros
    // (Exemplo: utilizar parâmetros de consulta na requisição HTTP)
    return this.httpClient.get('https://fiap-3sis-gs-20241.azurewebsites.net/index.html', {
      params: filters
    });
  }
}

