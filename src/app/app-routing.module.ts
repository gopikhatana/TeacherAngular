import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TDashboardComponent } from './tDashboard/t-dashboard/t-dashboard.component';
import { CustomFormSelectionComponent } from './teacherEntryForm/stateOrUserSpecificForm/custom-form-selection/custom-form-selection.component';
import { TeacherEntryFormComponent } from './teacherEntryForm/teacher-entry-form/teacher-entry-form.component';
import { TeacherComponent } from './teacherEntryForm/teacher.component';
import { TeachersDetailComponent } from './teacherEntryForm/teachersDetail/teachers-detail/teachers-detail.component';

const routes: Routes = [
  {path:'', component: TDashboardComponent},
  
    {path: 'teacher', component:TeacherComponent, children:[
      {path:'', component: ProfileComponent},
      {path:'profile', component: ProfileComponent},
      {path: 'teacherHome', component:TeacherEntryFormComponent} ,
      {path: 'customForm', component:CustomFormSelectionComponent},
      {path: 'teachersDetail', component:TeachersDetailComponent}
    ]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
