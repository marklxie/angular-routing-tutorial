import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';
import { EducationComponent } from './education/education.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path:"about", component: AboutComponent},
  { path:"help", component: HelpComponent},
  { path:"work", component: WorkComponent},
  { path:"education", component: EducationComponent},
  { path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
