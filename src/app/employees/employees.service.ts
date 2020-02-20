import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
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

    /**
     * This is the function that fetch a particular record
     * @param id This is the id whose record will be fetch 
     */
    getById(id:number): Observable<Employee>
    {
      debugger
      return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    }

    /**
     * 
     * @param employee This the employe record which will be send to JSON
     * @param id This is the id where the record will be Updated
     */
    public editDetails(employee:Employee,id:number): Observable<Employee>
    {
      debugger;
      return this.http.put<Employee>(`${this.apiUrl}/${id}`,employee)
    }
    
    /**
     * This function will searched the record in the JSON
     * @param searchData This is string that need to be searched in JSON
     */
   public searchData(searchData): Observable<Employee[]>
    {
        return this.http.get<Employee[]>(`${this.apiUrl}?q=${searchData}`);
    }
}
