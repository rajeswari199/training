import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-set',
    templateUrl: './set.component.html'
})
export class SetComponent {
    title = 'my-app';
    _ = _;
    array1: Array<number> = [1, 2, 3, 4, 5];
    array2: Array<number> = [4, 5, 6, 7, 8];
    result: Array<number>;

    setUnion() {
        this.result = [];
        this.result = _.cloneDeep(this.array1);
        this.array2.forEach(num => {
            if (!_.includes(this.result, num)) {
                this.result.push(num);
            }
        });
    }

    setIntersection() {
        this.result = [];
        this.array1.forEach(elem => {
            if (_.includes(this.array2, elem)) {
                this.result.push(elem);
            }
        });
    }

    setDifference(choice) {
        this.result = [];
        this.setIntersection();
        const res = this.result;
        this.result = [];
        choice === 'a-b' ? this.array1.forEach(tuple => {
            if (!_.includes(res, tuple)) {
                this.result.push(tuple);
            }
        }) :
        this.array2.forEach(tuple => {
            if (!_.includes(res, tuple)) {
                this.result.push(tuple);
            }
        });
    }
}
