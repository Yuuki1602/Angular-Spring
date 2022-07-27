import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit{
  
  id : number; 
  student : Student;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
      this.student = new Student();
      this.id = this.route.snapshot.params['masv'];
      this.studentService.getStudent(this.id)
      .subscribe((data) => {
        console.log(data);
        this.student = data;
      },
      error => console.log(error));
  }

  updateStudent() : void{
    this.studentService.update(this.id , this.student)
    .subscribe((data) => {
      console.log(data);
      this.student = new Student();
      this.gotoList();
    },
    error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/students']);
  }

  onSubmit() {
    this.updateStudent();
  }

}
