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
    "https://i0.wp.com/turnimedakinisam.mk/wp-content/uploads/2022/09/Pogled_kon_Golemo_ezero_Pelister.jpg?fit=1030%2C686&ssl=1",
    "https://i0.wp.com/turnimedakinisam.mk/wp-content/uploads/2022/06/%D0%93%D0%BE%D0%BB%D0%B5%D0%BC%D0%B0_%D0%93%D1%80%D0%B8%D0%B2%D0%B0_%D0%91%D0%B0%D0%B1%D0%B0_-_%D0%9F%D0%B5%D0%BB%D0%B8%D1%81%D1%82%D0%B5%D1%80_07.jpg?fit=1030%2C773&ssl=1",
    "https://i0.wp.com/turnimedakinisam.mk/wp-content/uploads/2022/11/%D0%9A%D0%B0%D0%B1%D0%B0%D1%88_%D0%BE%D0%B4_%D1%98%D1%83%D0%B3.jpg?fit=1030%2C773&ssl=1",
    "https://i0.wp.com/turnimedakinisam.mk/wp-content/uploads/2023/02/slavej.jpg?fit=1030%2C773&ssl=1",
    "https://i0.wp.com/turnimedakinisam.mk/wp-content/uploads/2023/01/%D0%93%D0%BB%D0%B5%D1%82%D0%BA%D0%B0_%D0%BD%D0%B0_%D0%93%D1%80%D0%B0%D0%B4%D0%B5%D1%86_%D0%BE%D0%B4_%D0%9F%D0%BB%D0%B0%D1%87%D0%BA%D0%BE%D0%B2%D0%B8%D1%86%D0%B0.jpg?fit=1030%2C773&ssl=1"
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./home.component.html', { responseType: 'text' })
      .subscribe(data => this.aboutUsContent = data);
  }

}
