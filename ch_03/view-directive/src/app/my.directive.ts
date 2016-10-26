import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
    selector: '[my-directive]'
})
export class MyDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el.nativeElement, 'my-new-class', true);
    }
}