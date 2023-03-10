import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public aboutUsContent!: string;
  imageUrls = [
    "./assets/ohridcalling.jpg",
    "./assets/skopjemarathon.jpg",
    "./assets/zlatnabubamara.jpg",
    "./assets/zdravomladi.jpg",
    "./assets/skopjecalling.jpg",
    // "./assets/dfest.jpg"
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./home.component.html', { responseType: 'text' })
      .subscribe(data => this.aboutUsContent = data);
  }

}
