import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  apiUrl='http://localhost:3000/api/users'

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data);
  }

  updateEmployee(id: String, data: any): Observable<any> {
    console.log(data,"data");
    return this._http.put(`${this.apiUrl}/${id}`,data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  deleteEmployee(id: String): Observable<any> {
    return this._http.delete(`${this.apiUrl}/${id}`);
  }
}
