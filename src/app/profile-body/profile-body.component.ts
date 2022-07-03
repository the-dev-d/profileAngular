import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.css']
})
export class ProfileBodyComponent implements OnInit {

  hide = false;
  constructor() { }

  ngOnInit(): void {
    window.onscroll = ()=>{
      let scroll = window.innerHeight + window.scrollY;
      if(scroll >= document.body.offsetHeight){
        if(!this.hide) {
          this.hide = true;
        }
      }
      else {
        if(this.hide) {
          this.hide = false;
        }
      }
    }
  }

}
