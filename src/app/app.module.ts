import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import{ DoctorComponent } from './doctor.component';
import { SquarePipe } from './square.pipe';
import { EmployeeCountComponent } from './EmployeeCount/employee-count/employee-count.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    SquarePipe,
    EmployeeCountComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DoctorComponent]
})
export class AppModule { }
