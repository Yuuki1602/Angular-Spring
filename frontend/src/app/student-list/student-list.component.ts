import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})


export class StudentListComponent implements OnInit {

  filters = {
    keyword: '',
    sortBy: 'Name'
  }

  public students: Student[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
      console.log(data);
    });
    this.listStudents();
  }

  onDeleteS(Sid: number): void {
    this.studentService.deleteStudent(Sid)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/students'])
            .then(() => window.location.reload()); //reload page
        },
        error => {
          console.log(error);
        });
  }

  //search filter name;
  listStudents(): void {
    this.studentService.findAll().subscribe(
      data => this.students = this.filterSearch(data)
    );
  }

  filterSearch(students: Student[]) {
    return students.filter((e) => {
      return e.ten.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a,b) =>{
      if(this.filters.sortBy === 'Name'){
        return a.ten.toLowerCase() < b.ten.toLowerCase() ? -1 : 1;
      }else if(this.filters.sortBy === "Tỉnh"){
        return a.tinh > b.tinh ? -1: 1;
      }
      return null;
    })
  }

}