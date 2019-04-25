import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

// Notice the @Input decorator. It adds metadata to the class that makes the directive's highlightColor property available for binding.
// It's called an input property because data flows from the binding expression into the directive. Without that input metadata,
// Angular rejects the binding; see below for more about that.
// Try it by adding the following directive binding variations to the AppComponent template:
  @Input() highlightColor: string;

//   You use the ElementRef in the directive's constructor to inject a reference to the host DOM element, 
// the element to which you applied appHighlight.
// ElementRef grants direct access to the host DOM element through its nativeElement property.
// This first implementation sets the background color of the host element to yellow.
  constructor(private el: ElementRef) {}

  // The @HostListener decorator lets you subscribe to events of the DOM element
  // that hosts an attribute directive, the <p> in this case.
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
