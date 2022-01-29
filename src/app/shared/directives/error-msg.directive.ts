import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color = 'red';
  private _mensaje = 'Miguel'
  htmlElement: ElementRef<HTMLElement>;
  @Input() set color( valor: string) {
    this._color = valor
    this.setColor()
  } 
  @Input() set mensaje(valor: string) {
    this._mensaje = valor
    this.setMensaje()
  } 
  @Input() set valido(valor: boolean) {
    if ( valor === true ){
        this.htmlElement.nativeElement.classList.add('hidden')
      } else {
      this.htmlElement.nativeElement.classList.remove('hidden')

    }
  } 
  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    // if ( changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue 
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if ( changes['color']) {
    //   const color = changes['color'].currentValue 
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }
  ngOnInit() {
    console.log('Init desde la directiva')
  
    // this.setColor()
    // this.setMensaje()
    this.setClass()
    this.setMensaje()
    this.setColor()
  }
  setClass() {
      this.htmlElement.nativeElement.classList.add('text-form');
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje():void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
 }
