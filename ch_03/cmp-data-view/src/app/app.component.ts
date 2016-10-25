import { Component } from '@angular/core';

@Component({
    selector: 'app',
    styles: [`
        .counter {
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            vertical-align: middle;
            background-color: grey;
            font-size: 80px;
            border: 1px solid #000
        }
        .buttons {
            width: 100px;
            text-align: center;
        }
    `],
    template: `
          <div class="counter" (mousemove)="printPosition($event)" [style.background-color]="getColor()">{{curCount}}</div>
          <div class="buttons">
            <button color="primary" on-click="inc()">+</button>
            <button color="primary" (click)="dec()">-</button>
          </div>
    	  `
})
export class AppComponent {
    curCount: number;

    constructor() {
        this.curCount = 0;
    }

    getColor() {
        if (this.curCount == 0) {
            return 'grey';
        } else if (this.curCount < 0) {
            return 'red';
        } else {
            return 'green'
        }
    }

    printPosition($event) {
        console.log(`X Pos: ${$event.clientX}, Y Pos: ${$event.clientY}`);
    }

    inc() {
        this.curCount++;
    }

    dec() {
        this.curCount--;
    }
}
