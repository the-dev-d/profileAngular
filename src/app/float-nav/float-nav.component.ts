import { state,style, trigger } from '@angular/animations';
import { Component, OnInit,Input } from '@angular/core';
import { Focusable } from '../Utils/Focusable';

@Component({
  selector: 'app-float-nav',
  templateUrl: './float-nav.component.html',
  styleUrls: ['./float-nav.component.css','../globaltyles.css'],
  animations: [
    trigger('openClose',[
      state('open',style({
        bottom:'1rem'
      })),
      state('close',style({
        bottom:'-2rem'
      }))
    ])
  ]
})
export class FloatNavComponent implements OnInit {


  constructor() {
  }
  @Input() items:Focusable[] = [];

  ngOnInit(): void {

  }
  beta() {
    alert("This feature is under build in angular version of this site you can check it in the react version");
  }
}
