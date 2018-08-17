import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Could be done with a regular directive with an ElementRef
@Directive({ selector: '[todoBorder]' })
export class BorderDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }

    @Input()
    set todoBorder(color: string) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.viewContainer.element.nativeElement.parentElement.style.borderColor = color;
        this.viewContainer.element.nativeElement.parentElement.style.borderStyle = 'solid';
    }

}
