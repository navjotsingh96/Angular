import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images = ['header_new.jpg', '2.jpg', 'pexels-andrea-piacquadio-3764580.jpg'];
  currentImage = 0;


  ngOnInit() {
    this.uploadImage();
  }

  uploadImage() {
    setInterval(() => {
      this.currentImage = this.currentImage % this.images.length;
      this.currentImage++;
    },8000);
  }
}
