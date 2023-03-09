import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../Card';
import { cardsList } from '../data';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']})
export class FormAddComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  card={}

  cards=cardsList


  subForm:FormGroup;

  id:number=0;
  i:number=0;


  constructor(private activatedRoute:ActivatedRoute,private router:Router){

    this.subForm = new FormGroup({
      'name': new FormControl('', [Validators.required]
    ),
    'location': new FormControl('', [Validators.required]
    ),
    'src': new FormControl('', [Validators.required]
    ),
    'map': new FormControl(''
    ),
    'description': new FormControl(''
    ),
      
    })

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      console.log(s)
      if(s["id"]==null|| this.cards.length<Number(s["id"]) || s["i"]==null ||s["i"]==''){
        this.card={}
        this.i=-1
      }else{
        this.id=Number(s["id"])
        this.i=Number(s["i"])
        this.card=this.cards[Number(s["id"])][Number(s["i"])]

        let card=this.cards[Number(s["id"])][Number(s["i"])]


        this.subForm.setValue({name:card.name,location:card.location,src:card.src,
        description:card.description,map:card.map})


        
        
      }
      
    });

    
  }

    onFormSubmit(){
      console.log("start");
      
      let name =this.subForm.get('name')?.value
      let location =this.subForm.get('location')?.value
      let img =this.subForm.get('src')?.value
      let map =this.subForm.get('map')?.value
      let description =this.subForm.get('description')?.value
      console.log(name,location,img,map,description);
      
      
      if(this.i<0){
        cardsList[this.id].push(new Card(name,location,img,img,description,map))
      }else{
        console.log("else");
        
        cardsList[this.id][this.i]=new Card(name,location,img,img,description,map)
      }

      
      this.cards=cardsList

      this.router.navigate(['/cards', this.id])
    
      

    }

    cancel(){
      this.router.navigate(['/cards', this.id])
    }


 
}
