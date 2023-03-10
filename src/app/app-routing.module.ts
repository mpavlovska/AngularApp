import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventComponent } from './event/event.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

import { CardsComponent } from './cards/cards.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: 'create/:id/:i', component: FormAddComponent},
  { path: 'cards/:id', component: CardsComponent},
  { path: 'favorite', component: FavoriteComponent},
  {path: 'event', component: EventComponent, pathMatch:'full'},
  {path: 'home', component: HomeComponent, pathMatch:'full'},
  {path: 'about-us', component: AboutUsComponent, pathMatch:'full'},
  {path: 'details/:id/:i', component: DetailsComponent},
  {path: '**', redirectTo: 'home'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
