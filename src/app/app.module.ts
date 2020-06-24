import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';

const routes: Routes = [
  {path: 'about-me',component: AboutMeComponent},
  {path: 'my-projects',component: MyProjectsComponent},
  {path: 'resume',component: ResumeComponent},
  {path: '**',redirectTo: "/about-me"}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
