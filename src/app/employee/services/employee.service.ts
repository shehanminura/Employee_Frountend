import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, employeeData);
  }

  searchEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/search-by-id/${id}`);
  }

  updateEmployee(employeeData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, employeeData);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
