import {Component} from '@angular/core';
import {Dog} from './dog';


const DOGS: Dog[] = [
  {
    name: 'Mops',
    engName: 'pug',
    weight: '8.1 kg',
    height: 'cm',
    info: 'ugly as hell, fat as pig',
    img: 'assets/img/pug.jpg'
  },
  {
    name: 'Buldog Amerykański',
    engName: 'Buldog',
    weight: '68kg',
    height: 'cm',
    info: 'Pies morderca',
    img: 'assets/img/buldogam.jpg'
  },
  {
    name: 'Owczarek Niemiecki',
    engName: 'Wolf',
    weight: '45kg',
    height: 'cm',
    info: 'Zabójca, grał Szarika w 4 pancernych',
    img: 'assets/img/owczarekniemiecki.jpg'
  },
  {
    name: 'Husky Syberyjski',
    engName: 'Husky',
    weight: '27kg',
    height: 'cm',
    info: 'Najgorszy przyjaciel człowieka',
    img: 'assets/img/siberianhusky.jpg'
  },
  {
    name: 'Jamnik krótkowłosy',
    engName: 'jamnik',
    weight: '99kg',
    height: 'cm',
    info: 'nie mylić z jajnik',
    img: 'assets/img/jamnikkrotkowłosy.jpg'
  }

];

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
})

export class DogComponent {
  dogs = DOGS;
  selectedDog: Dog;
  dog: Dog;

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }
}
// todo - dodać filtrowanie itemów
