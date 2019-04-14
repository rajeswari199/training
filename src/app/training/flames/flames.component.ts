import { Component, OnInit } from '@angular/core';
import { isUndefined, toArray, without, forEach, includes, indexOf } from 'lodash';

@Component({
  selector: 'app-flames',
  templateUrl: './flames.component.html',
  styleUrls: ['./flames.component.css']
})
export class FlamesComponent implements OnInit {

  flamesArray: Array<string>;
  name1: any;
  name2: any;
  count = 0;
  start = 0;
  win: string;
  isUndefined = isUndefined;
  constructor() { }

  ngOnInit() {
  }



  setArray() {
    if (this.flamesArray.length > 1) {
      const array = this.flamesArray;
      this.flamesArray = [];
      for (let i = this.start; i < array.length;) {
        this.flamesArray.push(array[i]);
        if (this.start === 0) {
          i++;
        } else {
          i = i === (array.length - 1) ? 0 : i !== (this.start - 1) ? (i + 1) : 7;
        }
      }
    }
  }

  flames() {
    this.flamesArray = ['f', 'l', 'a', 'm', 'e', 's'];
    this.win = '';
    this.getCount();
    for (let i = 0; i < 5; i++) {
      this.setArray();
      this.strike();
    }
    if (this.flamesArray.length === 1) {
      this.win = this.flamesArray[0];
      switch (this.win) {
        case 'f':
        this.win = 'FRIENDS';
        break;
        case 'l':
        this.win = 'LOVE';
        break;
        case 'a':
        this.win = 'AFFECTION';
        break;
        case 'm':
        this.win = 'MARRIAGE';
        break;
        case 'e':
        this.win = 'ENEMY';
        break;
        case 's':
        this.win = 'SISTER';
        break;
      }
    }
  }

  getCount() {
    this.name1 = toArray(this.name1);
    this.name2 = toArray(this.name2);
    without(this.name1, ' ');
    without(this.name2, ' ');
    forEach(this.name1, (a, i) => {
      if (includes(this.name2, a)) {
        this.name1[i] = ' ';
        this.name2[indexOf(this.name2, a)] = ' ';
      }
    });
    this.count = without(this.name1, ' ').length + without(this.name2, ' ').length;
  }

  strike() {
    const index = this.count % this.flamesArray.length === 0 ? this.flamesArray.length - 1 : (this.count % this.flamesArray.length) - 1;
    this.start = index === (this.flamesArray.length - 1) ? 0 : (index % this.flamesArray.length);
    this.flamesArray.splice(index, 1);
  }
}
