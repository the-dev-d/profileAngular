import { Component, OnInit,OnDestroy,AfterViewInit } from '@angular/core';
import { Focusable } from '../Utils/Focusable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../globaltyles.css']
})
export class HeaderComponent extends Focusable implements OnInit {

  public image:HTMLImageElement|undefined;

  constructor() {
    super();
  }

  ngOnInit(): void {
    let img = new Image();
    img.src = '../../assets/alphabgpic.png';
    img.onload = ()=> {this.image = img}
    img.onerror = ()=> {console.log("Image error")}
  }

  popUp(msg:string) {
    alert(msg);
  }

  ngAfterViewInit() {
    this.init("header");
  }
}
