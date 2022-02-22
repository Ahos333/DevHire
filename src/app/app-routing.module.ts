import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'contact',
    component: ContactComponent
  }, 
  {
    path: 'users',
    loadChildren: () => import('../app/users/users.module').then(u => u.UsersModule)
    /*loadChildren: 'app/users/users.module#UsersModule'*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
