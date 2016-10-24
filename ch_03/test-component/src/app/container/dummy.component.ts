import { Component } from '@angular/core';

import { Dummy2Component } from './dummy2.component';

@Component({
    selector: 'dummy',
    template: `
        <h2>dummy</h2>
        <dummy2></dummy2>
    `
})
export class DummyComponent {
}