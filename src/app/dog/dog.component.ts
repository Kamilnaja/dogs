import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
})
export class DogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

onSelect = function (dog) {
  alert(dog.info);

}
  // dogs:any = ['Mops', 'Buldog', 'Jamnik', 'Husky'];

dogs:any = [
  {
    id: 0, name: 'Mops', engName: 'pug', weight: '8.1 kg', height: 'cm', info: 'ugly as hell, fat as pig', img: 'assets/img/pug.jpg'
  },
  {
    id: 1, name: 'Buldog Amerykański', weight: '68kg', img: 'assets/img/buldogam.jpg'
  }, 
  {
    id: 2, name: 'Owczarek Niemiecki', weight: '45kg', img: 'assets/img/owczarekniemiecki.jpg'
  },
  {
    id: 3, name: 'Husky Syberyjski', weight: '27kg', img: 'assets/img/siberianhusky.jpg'
  },
  {
    id: 4, name: 'Jamnik krótkowsłoy', weight: '100kg', img: 'assets/img/jamnikkrotkowłosy.jpg'
  }

  ]
}
