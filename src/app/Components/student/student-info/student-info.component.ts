import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {Student} from "../../../model/student";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
   students!: Student[];

  constructor(private  studentService:  StudentService,
              private router : Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  private getAllStudents() {
    this.studentService.getAllStudents().subscribe(data=>{
      this.students=data;
      console.log(data);
    })
  }

  goToDetails(id: number) {
    this.router.navigate(['Students/details/'+id]);
  }
}
