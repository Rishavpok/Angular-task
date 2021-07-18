import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';

 const appRoutes:Routes = [
     { path: '' , component: LoginComponent  },
    { path: 'user-form', component: UserFormComponent  },
    
 ]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}