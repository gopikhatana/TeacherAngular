import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './utilities/header/header/header.component';
import { SideNavComponent } from './utilities/sideNav/side-nav/side-nav.component';
import { FooterComponent } from './utilities/footer/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule} from '@angular/material/stepper';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormDataService } from './teacherEntryForm/service/internalService/form-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TDashboardComponent } from './tDashboard/t-dashboard/t-dashboard.component';
import { LoginComponent } from './tDashboard/t-dashboard/login/login/login.component';
import { TeacherComponent } from './teacherEntryForm/teacher.component';
import { TeacherEntryFormComponent } from './teacherEntryForm/teacher-entry-form/teacher-entry-form.component';
import { TModuleModule } from './teacherModule/t-module/t-module.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { CustomFormSelectionComponent } from './teacherEntryForm/stateOrUserSpecificForm/custom-form-selection/custom-form-selection.component';
import { TeachersDetailComponent } from './teacherEntryForm/teachersDetail/teachers-detail/teachers-detail.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProfileComponent } from './profile/profile.component';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new MultiTranslateHttpLoader(http, [
//     {prefix: "./assets/translate/core/", suffix:".json"},
//     {prefix: "./assets/translate/shared/", suffix:".json"},
//   ])
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    TDashboardComponent,
    LoginComponent,
    TeacherComponent,
    TeacherEntryFormComponent,
    CustomFormSelectionComponent,
    TeachersDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    // HttpClientModule,
    // HttpClient,
    TModuleModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps:[HttpClient]
    //   }
    // })
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
