import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  public aboutUsContent!: string;
  imageUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg/375px-Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/375px-Shaqi_jrvej.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/375px-Bachalpsee_reflection.jpg"
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./home.component.html', { responseType: 'text' })
      .subscribe(data => this.aboutUsContent = data);
  }

}
