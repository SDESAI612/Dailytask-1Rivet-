import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { FormGroup } from '@angular/forms';
@Injectable()
export class EmployeesService {

 private apiUrl = environment.apiUrl;  

  constructor(private http: HttpClient) { }


  /**
   * This is used for getting data
   */
   public GetDetails(): Observable<Employee[]>
    {   
      debugger
      return this.http.get<Employee[]>(this.apiUrl);
    } 

    /**
     * This will delete the record of a particular employee
     * @param id This will take employee id as argument 
     */
    public DeleteDetails(id:number):Observable<Employee>
    {
        return this.http.delete<Employee>(this.apiUrl+'/'+id);
    }
    
    /**
     * This will the send the form group to json file
     * @param emp This will take the form group 
     */
    public postDetails(emp):Observable<Employee>
    {
      return this.http.post<Employee>(this.apiUrl,emp)
    }

    getById(id:number): Observable<Employee>
    {
      debugger
      return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    }

    public editDetails(employee:Employee,id): Observable<Employee>
    {
      debugger;
      return this.http.put<Employee>(`${this.apiUrl}/${id}`,employee)
    }
   public searchData(searchData): Observable<Employee[]>
    {
        return this.http.get<Employee[]>(`${this.apiUrl}?q=${searchData}`);
    }
}
