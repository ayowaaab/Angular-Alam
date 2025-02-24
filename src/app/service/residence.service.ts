import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  URL = 'http://localhost:3000/residence/';
  constructor(private http: HttpClient) {}
  getAllResidence(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.URL);
  }
  deleteResidence(id: any) {
    this.http.delete<Residence[]>(`${this.URL}/${id}`);
  }
  getResidence(id: any) {
    return this.http.get<Residence>(`${this.URL}${id}`);
  }
  addResidence(data: Residence) {
    return this.http.post<Residence[]>(`${this.URL}`, data);
  }
  updateResidence(data: Residence, id: any) {
    return this.http.put<Residence[]>(`${this.URL}/${id}`, data);
  }


}
