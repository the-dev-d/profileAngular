import { Component,AfterViewInit } from '@angular/core';
import { Focusable } from '../Utils/Focusable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css','../globaltyles.css']
})
export class FooterComponent extends Focusable implements AfterViewInit {

  constructor() {
    super();
   }
   ngAfterViewInit() {
    this.init("footer");
   }
}
