import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-four-connect',
  templateUrl: './four-connect.component.html',
  styleUrls: ['./four-connect.component.scss']
})
export class FourConnectComponent implements OnInit {

  counter = 0;
  win: boolean;
  button = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  Array1 = [];
  Array2 = [];
  constArray = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7]
  ];
  constructor() { }

  ngOnInit() {
  }

  coinInserted(column, row) {
    this.counter++;
    column = column > 0 ? column + 1 : 1;
    this.button[row][column] = this.counter % 2 === 0 ? 2 : 1;
    if (this.counter % 2 === 0) {
      this.Array2.push({
        i: column,
        j: row
      });
      if (this.counter > 5) {
        this.separateRowAndColumn(this.Array2);
      }
    } else {
      this.Array1.push({
        i: column,
        j: row
      });
      if (this.counter > 5) {
        this.separateRowAndColumn(this.Array1);
      }
    }
    return column;
  }

  checki(checkArray, isDiagonal) {
    let iArray = [];
    let check1 = [];
    _.forEach(this.constArray, (array) => {
      _.forEach(checkArray, (check) => {
        iArray.push(check.i);
      });
      check1 = _.remove(iArray, (n) => {
        return _.includes(array, n);
      });
      if (_.matches(array, _.uniq(check1).sort())
        && (_.findIndex(this.constArray, _.matches(_.uniq(check1).sort())) > -1)
        && _.uniq(check1).sort().length > 3) {
        if (!isDiagonal) {
          this.win = true;
        } else {
          this.checkj(checkArray);
        }
      }
    });
  }

  checkj(checkArray) {
    let jArray = [];
    let check1 = [];
    _.forEach(this.constArray, (array) => {
      _.forEach(checkArray, (check) => {
        jArray.push(check.j);
      });
      check1 = _.remove(jArray, (n) => {
        return _.includes(array, n);
      });
      if (_.matches(array, _.uniq(check1).sort())
        && (_.findIndex(this.constArray, _.matches(_.uniq(check1).sort())) > -1)
        && _.uniq(check1).sort().length > 3) {
        this.win = true;
      }
    });
  }

  separateRowAndColumn(checkArray) {
    let check1 = [];
    let check2 = [];
    let iArray = [];
    let jArray = [];
    _.forEach(checkArray, (check) => {
      iArray.push(check.i);
      jArray.push(check.j);
    });
    _.forEach(_.uniq(iArray).sort(), (check) => {
      _.map(checkArray, (array) => {
        if (array.i === check) {
          check1.push(array);
        }
      });
      this.checkj(check1);
      check1 = [];
    });
    _.forEach(_.uniq(jArray).sort(), (check) => {
      _.map(checkArray, (array) => {
        if (array.j === check) {
          check2.push(array);
        }
      });
      this.checki(check2, false);
      check2 = [];
    });
    if (!this.win || _.isUndefined(this.win)) {
      this.checki(checkArray, true);
    }
  }
}
