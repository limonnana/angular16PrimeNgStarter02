import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    TableModule,
    DataViewModule,
    ButtonModule 
  ]
})
export class UserModule { }
