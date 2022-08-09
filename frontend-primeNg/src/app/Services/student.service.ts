import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Student } from '../Model/student';


@Injectable()
export class StudentService {

  private studentUrl: string;

  constructor(private http: HttpClient) {
    this.studentUrl = 'http://localhost:8080/students';
  }
  // list
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.studentUrl}`);
  }
  public getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.studentUrl}/${id}`);
  }
  //add
  public save(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.studentUrl}/add`, student);
  }
  //edit
  public update(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.studentUrl}/update`+"/" + student.masv, student);
  }

  //delete
  public deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.studentUrl}/delete/${id}`);
  }

  //search 
  public searchStudent(term: string): Observable<Student[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Student[]>(`${this.studentUrl}/?search/name=${term}`);
  }

}