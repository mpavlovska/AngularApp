import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public homeContent!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./home.component.html', { responseType: 'text' })
      .subscribe(data => this.homeContent = data);
  }

}
