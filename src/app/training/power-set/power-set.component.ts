import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-power-set',
  templateUrl: './power-set.component.html',
  styleUrls: ['./power-set.component.scss']
})
export class PowerSetComponent implements OnInit {

  constructor() { }

  setArray: any;
  final = [];
  _ = _;

  ngOnInit() {
  }

  powerSet() {
    this.setArray = _.toArray(this.setArray);
    for (let num = 0; num <= this.setArray.length; num++) {
      this.final[num] = [];
      if (num > 0) {
        this.final[num] = this.generateSet([...this.final[num - 1]], num);
      } else {
        this.final[num].push('{}');
      }
    }
  }

  generateSet(array, count) {
    let loopArray = [];
    for (let i = 0; i <= this.setArray.length - count; i++) {
      if (count > 1) {
        for (let j = i + 1; j < array.length; j++) {
          if (!array[j].match(this.setArray[i]) && array[j] !== '0') {
            loopArray.push(`{${this.setArray[i]},${array[j].replace(/{|}/g, '')}}`);
          } else {
            array[j] = '0';
          }
        }
      } else {
        loopArray.push(`{${this.setArray[i]}}`);
      }
    }
    this.final[count].push(loopArray);
    return loopArray;
  }
}
