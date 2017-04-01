import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-redactor',
  template: '<div class="redactor"></div>'
})
export class RedactorComponent implements AfterViewInit {

  redactorElement: JQuery;
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
  }

}
