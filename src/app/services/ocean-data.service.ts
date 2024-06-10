import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OceanData } from '../interfaces/oceandata';

@Injectable({
  providedIn: 'root'
})
export class OceanDataService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData';

  constructor(private http: HttpClient) {}


  list(filters: any = {}): Observable<OceanData[]> {
    let params = new HttpParams();
    for (let key in filters) {
      if (filters[key] && filters[key] !== 'All') {
        params = params.set(key, filters[key]);
      }
    }
    return this.http.get<OceanData[]>(this.apiUrl, { params });
  }

}