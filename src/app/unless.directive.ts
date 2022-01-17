import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) { // setter d'une prop
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef); // crée une vue du template
    }
    else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef
  ) { }

}
