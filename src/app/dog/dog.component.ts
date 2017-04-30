import {Component} from '@angular/core';
import {Dog} from './dog';


const DOGS: Dog[] = [
  {
    id: 1,
    name: 'Mops',
    engName: 'pug',
    weight: '8.1 kg',
    height: 'cm',
    info: 'ugly as hell, fat as pig',
    img: 'assets/img/pug.jpg'
  },
  {
    id: 2,
    name: 'Buldog Amerykański',
    engName: 'Buldog',
    weight: '68kg',
    height: 'cm',
    info: 'Pies morderca',
    img: 'assets/img/buldogam.jpg'
  },
  {
    id: 3,
    name: 'Owczarek Niemiecki',
    engName: 'Wofl',
    weight: '45kg',
    height: 'cm',
    info: 'zabójca',
    img: 'assets/img/owczarekniemiecki.jpg'
  },
  {
    id: 4,
    name: 'Husky Syberyjski',
    engName: 'Husky',
    weight: '27kg',
    height: 'cm',
    info: 'najgorszy przyjaciel człowieka',
    img: 'assets/img/siberianhusky.jpg'
  },
  {
    id: 5,
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
// todo po wyświetleniu psa, ma się pojawiać więcej info na jego temat w oknie
