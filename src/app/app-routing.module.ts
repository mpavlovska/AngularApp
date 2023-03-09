import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FormAddComponent } from './form-add/form-add.component';

const routes: Routes = [
  { path: 'create/:id/:i', component: FormAddComponent},
  { path: 'cards/:id', component: CardsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
