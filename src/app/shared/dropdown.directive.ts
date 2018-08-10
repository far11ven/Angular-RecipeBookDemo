import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  isOpen: boolean = false;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.isOpen == false) {
      this.renderer.addClass(this.elemRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elemRef.nativeElement, 'open');
    }

    this.isOpen =! this.isOpen;

  }

}
