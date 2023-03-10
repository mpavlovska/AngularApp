import { Injectable } from '@angular/core';
import { Card } from './Card';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  private favorites:Array<Card>
  constructor() {
    this.favorites=new Array<Card>
   }

   deleteFromFavorites(name:string){
    this.favorites=this.favorites.filter(c=>c.name!=name)
   }

   addToFavorites(card:Card){
    this.favorites.push(card);
   }

   getFavorites(){
    return this.favorites;
   }

   contains(name:string){
    let idx=this.favorites.findIndex(c=>c.name==name)
    if(idx<0)
      return false;
    return true;
   }
}
