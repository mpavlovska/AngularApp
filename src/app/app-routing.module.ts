import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch:'full'},
  {path: 'contact', component: ContactComponent, pathMatch:'full'},
  {path: 'about-us', component: AboutUsComponent, pathMatch:'full'},
  {path: 'details', component: DetailsComponent, pathMatch:'full'},
  {path: '**', redirectTo: 'home'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
