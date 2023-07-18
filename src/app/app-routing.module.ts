import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';


const routes: Routes = [
  {
    path: 'about',
    component: AppComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'experience',
    component: AppComponent
  },
  {
    path: 'contact',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
