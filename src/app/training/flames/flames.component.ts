import { Component, OnInit } from '@angular/core';
import { remove, toArray, without, forEach, includes, indexOf } from 'lodash';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-flames',
  templateUrl: './flames.component.html',
  styleUrls: ['./flames.component.css']
})
export class FlamesComponent implements OnInit {

  flamesArray = ['f', 'l', 'a', 'm', 'e', 's'];
  flamesArray1 = this.flamesArray;
  name1: any;
  name2: any;
  count = 0;
  start = 0;
  constructor() { }

  ngOnInit() {
  }



  setArray() {
    if (this.flamesArray1.length > 1) {
      const array = this.flamesArray1;
      this.flamesArray1 = [];
      for (let i = this.start; i < array.length;) {
        this.flamesArray1.push(array[i]);
        if (this.start === 0) {
          i++;
        } else {
          i = i === (array.length - 1) ? 0 : i !== (this.start - 1) ? (i + 1) : 7;
        }
      }
    }
  }

  flames() {
    this.flamesArray1 = this.flamesArray;
    this.getCount();
    for (let i = 0; i < 5; i++) {
      this.setArray();
      this.strike();
    }
    if (this.flamesArray1.length === 1) {
      console.log(this.flamesArray1);
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
    const index = this.count % this.flamesArray1.length === 0 ? this.flamesArray1.length - 1 : (this.count % this.flamesArray1.length) - 1;
    this.start = index === (this.flamesArray1.length - 1) ? 0 : (index % this.flamesArray1.length);
    this.flamesArray1.splice(index, 1);
  }
}
