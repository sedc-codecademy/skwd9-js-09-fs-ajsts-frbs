import {
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverShadow]',
})
export class HoverShadowDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.elementRef.nativeElement.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
  }

  @HostListener('mouseenter') mouseOver() {
    // this.elementRef.nativeElement.style.boxShadow =
    //   '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
    );
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.elementRef.nativeElement.style.boxShadow = 'none';
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
  }
}
