import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { hasRoleGuard } from '../../service/has-role.guard';
import { Role } from '../../api/role';


const routes: Routes = [
    
  { 
      path: '', component: UserComponent,
      canActivate: [hasRoleGuard],
      data: {
        roles: [ Role.ADMIN]
      }
  },
];

 



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
