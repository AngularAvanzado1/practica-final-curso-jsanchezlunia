import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[pcaRegionesUbicacionActual]'
})
export class UbicacionActualDirective {
  @Input()
  set pcaRegionesUbicacionActual(code: string) {
    const color = code === 'ECS' ? '#ddd' : 'white';
    this.el.nativeElement.style.backgroundColor = color;
  }
  constructor(private el: ElementRef) { }
}
