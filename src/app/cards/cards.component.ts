import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../Card';
import { cardsList } from '../data';
import { FavoriteServiceService } from '../favorite-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  cards:Array<Card>
  cardsList1=cardsList
  id:number=0;
  route:string=""
  

constructor(private activatedRoute: ActivatedRoute,private router:Router,private favoriteService:FavoriteServiceService) { 
this.cards=favoriteService.getFavorites();

  
}
    
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      if(s["id"]==null|| this.cardsList1.length<Number(s["id"])){
        this.cards=[]
      }else{
        this.cards=this.cardsList1[Number(s["id"])]
        this.id=Number(s["id"])
        this.route='create'
      }
      
    });

}

deleteItem(name:string){
   this.cards=this.cards.filter(c=>c.name!==name)
   cardsList[this.id]=this.cards
}


likeItem(i:number,name:string){
  if(!this.favoriteService.contains(name)){
    this.favoriteService.addToFavorites(cardsList[this.id][i])
    cardsList[this.id][i].favorite=true
  }else{
    this.favoriteService.deleteFromFavorites(name)
    cardsList[this.id][i].favorite=false
  }
  
 
  this.cards=cardsList[this.id]
}

editItem(i:number){
  this.router.navigate(['/create', this.id, i])
}


}
