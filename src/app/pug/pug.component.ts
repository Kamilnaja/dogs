import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pug',
  templateUrl: './pug.component.html',
})
export class PugComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pug = {
    id: 0, name: 'Mops', firstname: 'Tortelini', engName: 'pug', weight: '8.1 kg', height: '30cm', info: 'give me a kiss, albo będę gryzł', img: 'assets/img/pug.jpg'
  }
}
