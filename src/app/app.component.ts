import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images = ['header_new.jpg', '2.jpg', 'pexels-andrea-piacquadio-3764580.jpg'];
  headlines = [
    'Bring engernnierng to next level',
    'Born to Code',
    'Studied in India'
  ];

  currentImage = 0;
  showImage = true;


  ngOnInit() {
    this.uploadImage();
  }

  uploadImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;


      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
