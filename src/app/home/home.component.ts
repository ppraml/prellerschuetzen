import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any> = []

  constructor() { 
    this.items = [
      { name: 'assets/pictures/slider_image_1.jpg' },
      { name: 'assets/pictures/slider_image_2.jpg' },
      { name: 'assets/pictures/slider_image_3.jpg' },
    ]
  }

  ngOnInit() {
  }

}
