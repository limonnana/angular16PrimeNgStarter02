import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsereditComponent } from './useredit/useredit.component';
import { InputTextModule } from "primeng/inputtext";


@NgModule({
  declarations: [
    UserComponent , UsereditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    TableModule,
    DataViewModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,

  ]
})
export class UserModule { }
