import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective {

  constructor(private er:ElementRef) { 
    er.nativeElement.style.color ="red";
  }



}
