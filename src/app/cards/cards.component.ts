import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../Card';
import { cardsList } from '../data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  cards=[new Card("","","","","","")]
  cardsList1=cardsList
  id:number=0;
  route:string=""
  

constructor(private activatedRoute: ActivatedRoute) { 


  
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



}
