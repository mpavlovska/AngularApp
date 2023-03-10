import 'src/assets/js/jquery.maphilight.js';
import { Component,AfterViewInit } from '@angular/core';
 
declare var $: any;
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap/nav/nav.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularapp';
 
}
