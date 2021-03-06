import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentInfoComponent } from './Components/student/student-info/student-info.component';
import {HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CreateClassComponent } from './Components/classroom/create-class/create-class.component';
import { ClassListComponent } from './Components/classroom/class-list/class-list.component';
import { CreateStudentComponent } from './Components/student/create-student/create-student.component';
import {FormsModule} from "@angular/forms";
import { StudentDetailsComponent } from './Components/student/student-details/student-details.component';
import { UpdateClassComponent } from './Components/classroom/update-class/update-class.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentInfoComponent,
    NavBarComponent,
    CreateClassComponent,
    ClassListComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    UpdateClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
