import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBodyComponent } from './profile-body/profile-body.component';
import { BlogbodyComponent } from './blogbody/blogbody.component';

const routes: Routes = [{path:'',component:ProfileBodyComponent},{path:'blog',component:BlogbodyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
