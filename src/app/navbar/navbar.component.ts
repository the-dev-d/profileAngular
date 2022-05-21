import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../globaltyles.css']
})
export class NavbarComponent implements OnInit, OnDestroy {


  activeRoute: string = '';
  activeRouteObservable:Subscription;

  constructor(private route:Router) {
    this.activeRouteObservable = this.route.events.subscribe({
      next:(event:any) => {if(event instanceof NavigationEnd){this.activeRoute = event.url}},
      error: ()=>{console.log("Unexpected error");this.activeRoute = ''},
      complete: ()=> {}
    })
  }

  ngOnInit(): void {

  }

  popUp(msg:string) {
    alert(msg)
  }
  ngOnDestroy(): void {
    this.activeRouteObservable.unsubscribe();
  }

}
