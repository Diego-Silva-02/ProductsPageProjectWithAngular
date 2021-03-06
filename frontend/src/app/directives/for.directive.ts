import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[] | undefined

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
    
  }
  ngOnInit(): void {
      if (this.numbers == undefined)
        this.numbers = [0,1,2]

      for(let number of this.numbers){
        this.container.createEmbeddedView(this.template, { $implicit: number })
      }
  }
}
