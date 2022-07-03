import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Focusable } from '../Utils/Focusable';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css','../globaltyles.css']
})
export class AboutMeComponent extends Focusable implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.init("about");
  }
}
