import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-nav',
  templateUrl: './float-nav.component.html',
  styleUrls: ['./float-nav.component.css','../globaltyles.css']
})
export class FloatNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  beta() {
    alert("This feature is under build in angular version of this site you can check it in the react version");
  }
}
