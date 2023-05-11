import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  constructor(){}
  images = [  'assets/1.JPG',  'assets/2.JPG', 'assets/3.JPG',  'assets/4.JPG'];

  currentIndex = 0;
  intervalTime = 3000; 

  ngOnInit(): void {
    setInterval(() => {
      this.moveToNext();
    }, this.intervalTime);
  }
  moveToNext(): void {
    this.currentIndex++;
    if (this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    }
  }
}
