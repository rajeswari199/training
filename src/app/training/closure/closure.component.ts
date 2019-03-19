import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-closure',
    templateUrl: './closure.component.html'
})
export class ClosureComponent {
    message = '';
    count: number;
    closure(option, counter) {
        this.count = counter > 0 ? counter + 1 : 1;
        this.message = `You clicked ${option} ${this.count} times`;
        return this.count;
    }

}

