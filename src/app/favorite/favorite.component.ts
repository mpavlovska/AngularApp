import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../Card';
import { cardsList } from '../data';
import { FavoriteServiceService } from '../favorite-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {


  cards:Array<Card>


  constructor(private router:Router,private favoriteService:FavoriteServiceService){
    this.cards=favoriteService.getFavorites();
  }

  detailsItem(name:string){
    cardsList.forEach((item)=>{

      let idx1=cardsList.indexOf(item)
      let idx2=item.findIndex(
        (x) =>
          x.name == name
      );

      if(idx2>=0){
        this.router.navigate(['/details',idx1,idx2])
      }

    })
  }
  unlikeItem(name:string){
    this.favoriteService.deleteFromFavorites(name);

    cardsList.forEach((item)=>{

      let idx1=cardsList.indexOf(item)
      let idx2=item.findIndex(
        (x) =>
          x.name == name
      );

      if(idx2>=0){
        cardsList[idx1][idx2].favorite=false
      }

    })
  
    this.cards=this.favoriteService.getFavorites()
  
  }


}
