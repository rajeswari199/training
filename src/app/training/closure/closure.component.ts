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
        switch (option) {
            case 1: {
                this.message = `You clicked A ${this.count} times`;
                return this.count;
            }
            case 2: {
                this.message = `You clicked B ${this.count} times`;
                return this.count;
            }
            case 3: {
                this.message = `You clicked C ${this.count} times`;
                return this.count;
            }
            case 4: {
                this.message = `You clicked D ${this.count} times`;
                return this.count;
            }
            case 5: {
                this.message = `You clicked E ${this.count} times`;
                return this.count;
            }
        }

    }
}
