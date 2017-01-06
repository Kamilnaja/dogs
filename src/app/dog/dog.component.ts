import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export class Dog {
  id: number;
  name: string;
  engName: string;
  weight: string;
  height: string;
  info: string;
  img: string;
}

const DOGS: Dog[] = [
  {
    id: 0, name: 'Mops', engName: 'pug', weight: '8.1 kg', height: 'cm', info: 'ugly as hell, fat as pig', img: 'assets/img/pug.jpg'
  },
  {
    id: 1, name: 'Buldog Amerykański', engName: 'Buldog', weight: '68kg', height: 'cm', info: 'Pies morderca', img: 'assets/img/buldogam.jpg'
  }, 
  {
    id: 2, name: 'Owczarek Niemiecki', engName: 'Wofl', weight: '45kg', height: 'cm', info: 'zabójca', img: 'assets/img/owczarekniemiecki.jpg'
  },
  {
    id: 3, name: 'Husky Syberyjski', engName: 'Husky', weight: '27kg', height: 'cm', info: 'najgorszy przyjaciel człowieka', img: 'assets/img/siberianhusky.jpg'
  },
  {
    id: 4, name: 'Jamnik krótkowsłoy', engName: 'jamnik', weight: '100kg', height: 'cm',info: 'nie mylić z jajnik', img: 'assets/img/jamnikkrotkowłosy.jpg'
  }

  ];

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
})

export class DogComponent {

dogs = DOGS;
  // dogs:any = ['Mops', 'Buldog', 'Jamnik', 'Husky'];
}