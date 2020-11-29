import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[pcaRegionesUbicacionActual]'
})
export class UbicacionActualDirective {
  @Input()
  set pcaRegionesUbicacionActual(code: string) {
    this.el.nativeElement.style.backgroundColor = (code === 'ECS') ? '#b8d4fd' : 'white';
  }
  constructor(private el: ElementRef) { }
}
