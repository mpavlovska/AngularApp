import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../Card';
import { cardsList } from '../data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {


  cards=cardsList

  card:Card|undefined
  i:number=0;
  id:number=0;
  constructor(private activatedRoute:ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {

      if(s["id"]==null|| this.cards.length<Number(s["id"]) || s["i"]==null ||s["i"]==''){
        this.i=-1
      }else{
        this.id=Number(s["id"])
        this.i=Number(s["i"])
        this.card=this.cards[Number(s["id"])][Number(s["i"])]

        let card=this.cards[Number(s["id"])][Number(s["i"])]
        
        
      }
      
    });

    
  }
  
}





