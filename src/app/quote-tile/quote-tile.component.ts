import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Quote {
  "id":string,
  "author": string,
  "en":string
}


@Component({
  selector: 'app-quote-tile',
  templateUrl: './quote-tile.component.html',
  styleUrls: ['./quote-tile.component.css','../globaltyles.css']
})
export class QuoteTileComponent implements OnInit {

  public quote:Quote|undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Quote>('https://programming-quotes-api.herokuapp.com/Quotes/random')
    .subscribe({
      next: data => {this.quote = data},
      error: err => {console.log(err);this.quote = {"id":"5a6ce86f2af929789500e80d","author":"Fred Brooks","en":"What one programmer can do in one month, two programmers can do in two months."}},
      complete: () => {console.log("Completed")}
    })
  }

}
