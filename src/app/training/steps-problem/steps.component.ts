import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html'
})
export class StepsComponent {
    _ = _;
    steps: number;
    leastSkip: number;
    highestSkip: number;
    result: Array<number>;
    skipArray: Array<number>;
    posibilities: number;

    calculate() {
        console.log(this.leastSkip, this.highestSkip, this.steps);
        this.result = _.fill(Array(this.steps + 1), 0);
        this.result.forEach((posibility, step) => {
            this.result[step] = step === this.leastSkip ? 1
                : step > this.highestSkip
                    ? (this.result[step - this.highestSkip] + this.result[step - this.leastSkip])
                    : (step - this.highestSkip === 0)
                        ? (this.result[step - this.leastSkip] + 1)
                        : step > this.leastSkip
                            ? (this.result[step - this.leastSkip]) : 0;
        });
        this.posibilities = _.reduce(this.result, (add, posibility) =>
            add + posibility);
        console.log(this.result);
        console.log(this.posibilities);
    }

    calculateArray() {
        this.result = _.fill(Array(this.steps + 1), 0);
        this.skipArray = _.slice(_.times(this.highestSkip + 1, Number), this.leastSkip, this.highestSkip + 1);
        console.log(this.skipArray);
        _.forEach(this.result, (possibilities, step) => {
            if (_.includes(this.skipArray, step)) { this.result[step] = 1; }
            _.forEach(this.skipArray, (skipCount, index) => {
                (step - skipCount) < this.leastSkip ?
                    this.result[step] = this.result[step]
                    : (step > this.highestSkip) || ((step - skipCount) >= this.leastSkip) ?
                        this.result[step] += this.result[step - skipCount]
                        : this.result[step] = this.result[step];
            });
        });
        this.posibilities = _.reduce(this.result, (add, posibility) =>
            add + posibility);
        console.log(this.result, this.posibilities);
    }

    calculateRecursive() {
        this.result = _.fill(Array(this.steps + 1), 0);
        this.result[this.leastSkip] = 1;
        this.result[this.highestSkip] = 1;
        console.log(this.result);
        this.posibilities = this.possibility(this.leastSkip);
    }

    possibility(step) {
        if ((step - this.leastSkip) > 0) {
            this.result[step] += this.result[step - this.leastSkip];
            if ((step - this.highestSkip) > 0) {
                this.result[step] += this.result[step - this.highestSkip];
            }
            if (step < this.steps) {
                console.log(this.result);
                return this.possibility(step + 1);
            } else {
                return _.reduce(this.result, (add, posibility) =>
                    add + posibility);
            }
        } else {
            return this.possibility(step + 1);
        }
    }
}
