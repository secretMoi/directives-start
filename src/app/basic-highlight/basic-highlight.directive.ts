import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]' // ajouter [] permet à angular de le reconnaitre dans le html sans de voir spécifier les []
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
