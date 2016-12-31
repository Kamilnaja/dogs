import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // dogs:any = ['Mops', 'Buldog', 'Jamnik', 'Husky'];
dogs:any = [
  {
    id: 0, name: 'Mops', weight: '8.1 kg', img: 'assets/img/pug.jpg'
  },
  {
    id: 1, name: 'Buldog Amerykański', weight: '68kg', img: 'assets/img/buldogam.jpg'
  }, 
  {
    id: 2, name: 'Owczarek Niemiecki', weight: '45kg', img: 'assets/img/owczarekniemiecki.jpg'
  }]
}
