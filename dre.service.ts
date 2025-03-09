import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DreRecord {
  id?: number;
  name: string;
  certification_date: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DreService {
  private apiUrl = 'http://localhost:8080/api/dre';

  constructor(private http: HttpClient) {}

  getAllDre(): Observable<DreRecord[]> {
    return this.http.get<DreRecord[]>(this.apiUrl);
  }

  getDreById(id: number): Observable<DreRecord> {
    return this.http.get<DreRecord>(`${this.apiUrl}/${id}`);
  }

  createDre(record: DreRecord): Observable<DreRecord> {
    return this.http.post<DreRecord>(this.apiUrl, record);
  }

  updateDre(id: number, record: DreRecord): Observable<DreRecord> {
    return this.http.put<DreRecord>(`${this.apiUrl}/${id}`, record);
  }

  deleteDre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  filterDreByStatus(status: string): Observable<DreRecord[]> {
    return this.http.get<DreRecord[]>(`${this.apiUrl}/filter?status=${status}`);
  }

  searchDreByName(name: string): Observable<DreRecord[]> {
    return this.http.get<DreRecord[]>(`${this.apiUrl}/search?name=${name}`);
  }
  
}
