import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, SortEvent } from 'primeng/api';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Services/student.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filters = {
    keyword: '',
    sortBy: 'Name'
  }
  student: Student;
  studentDialog: boolean;
  clonedProducts: { [s: string]: Student; } = {};
  students: Student[];

  constructor(private studentService: StudentService,
    private messageService: MessageService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.getAll();

  }
  onRowEditInit(student: Student) {
  }
  onRowEditSave(student: Student) {
    this.studentService.update(student).subscribe(data => {
      this.ngOnInit();
      this.messageService.add({ severity: 'Success', summary: 'Success', detail: 'Student is update!' });
    });

  }
  onRowEditCancel(student: Student, index: string) {

  }
  public getAll() {
    this.studentService.getAll().subscribe((results) => {
      this.students = results;
    });
  }

  onDeleteS(Sid: string): void {
    this.studentService.deleteStudent(Sid)
      .subscribe(
        response => {
          console.log(response);
          this.messageService.add({ severity: 'Success', summary: 'Success', detail: 'Student is delete!' });
          this.router.navigate(['/']).then(() => setTimeout(location.reload.bind(location), 300));
        },
        error => {
          console.log(error);
        });
  }
  openNew() {
    this.studentDialog = true;
    this.student = {};
  }

  hideDialog() {
    this.studentDialog = false;
  }
  onSave(student: Student) {
    console.log("Student is add!")
    this.studentService.save(this.student).subscribe(result => this.student = result);
    this.messageService.add({ severity: 'Success', summary: 'Success', detail: 'Student is add!' });
    this.router.navigate(['/']).then(() => setTimeout(location.reload.bind(location), 300));
  }
  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.students);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcel(excelBuffer, "students");

    });
  }
  saveAsExcel(buffer: any, filename: string) {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTETION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, filename + '_exprot_' + new Date().getTime() + EXCEL_EXTETION);
  }

}
