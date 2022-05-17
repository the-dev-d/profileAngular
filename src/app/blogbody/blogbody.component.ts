import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Posts {
  title:string,
  post:string,
  posted:string
}

@Component({
  selector: 'app-blogbody',
  templateUrl: './blogbody.component.html',
  styleUrls: ['./blogbody.component.css']
})
export class BlogbodyComponent implements OnInit {

  blogdata:Posts[]|undefined;
  error:any|undefined;

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get<Posts[]>('http://thedevd.atwebpages.com/')
    .subscribe({
      next : (value:Posts[]) => {this.blogdata = value},
      error : (error:any) => {this.error = error.message},
      complete : () => {console.log("Complete")}
    }
    )
  }

}
