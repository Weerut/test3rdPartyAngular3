import { Component, AfterViewInit, ElementRef } from '@angular/core';

import * as jQuery from 'jquery';
import "fullcalendar";

@Component({
  template: '<ng-content></ng-content>',
  selector: 'app-calendar'
})
export class CalendarComponent implements AfterViewInit {
  calendarElement: any;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.calendarElement = jQuery(this.elementRef.nativeElement);
    this.calendarElement.fullCalendar({});
  }
}
