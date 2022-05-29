import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../globaltyles.css']
})
export class HeaderComponent implements OnInit {

  public image:HTMLImageElement|undefined;

  constructor() { }

  ngOnInit(): void {
    let img = new Image();
    img.src = '../../assets/alphabgpic.png';
    img.onload = ()=> {this.image = img}
    img.onerror = ()=> {console.log("Image error")}
  }

  popUp(msg:string) {
    alert(msg);
  }
}
