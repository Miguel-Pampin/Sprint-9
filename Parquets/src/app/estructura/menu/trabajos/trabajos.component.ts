import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  images = [  'assets/1.JPG',  'assets/2.JPG', 'assets/3.JPG',  'assets/4.JPG'];
  modalOpen = false;
  selectedImage: any;
  
  openModal(img: any) {
    this.selectedImage = img;
    this.modalOpen = true;
  }
  
  closeModal() {
    this.modalOpen = false;
  }


}
