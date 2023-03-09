import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  public aboutUsContent!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./home.component.html', { responseType: 'text' })
      .subscribe(data => this.aboutUsContent = data);
  }

}
