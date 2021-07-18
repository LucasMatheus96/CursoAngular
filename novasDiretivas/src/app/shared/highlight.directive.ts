import { Directive,HostListener,HostBinding , Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {

  
  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(this._elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor =this.highlightcolor
}

@HostListener('mouseleave') onMouseLeaver(){
//     this._renderer.setStyle(this._elementRef.nativeElement,'background-color','white');
this.backgroundColor = this.defaultColor
}

@HostBinding('style.backgroundColor') backgroundColor: string ='';

@Input() defaultColor: string = 'white'

@Input() highlightcolor:string = 'yellow'

  constructor() { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.backgroundColor = this.defaultColor;
  }
  

}

