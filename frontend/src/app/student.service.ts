import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';


@Injectable()
export class StudentService {

  private studentUrl: string;

  constructor(private http: HttpClient) {
    this.studentUrl = 'http://localhost:8080/students';
  }
  // list
  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.studentUrl}`);
  }
  //get 1
  public getStudent(id :number) : Observable<Student> {
    return this.http.get<Student>(`${this.studentUrl}/${id}`);
  }
  //add
  public save(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.studentUrl}/add`, student);
  }
  //edit
  public update(id : number,student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.studentUrl}/update/${id}`, student);
  }

  //delete
  public deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.studentUrl}/delete/${id}`);
  }
}