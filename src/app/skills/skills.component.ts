import { Component, OnInit } from '@angular/core';
import  {skill} from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css','../globaltyles.css']
})
export class SkillsComponent implements OnInit {

  public skillset:any;

  constructor() {
    this.skillset = skill;
    console.log(this.skillset)
   }

  ngOnInit(): void {
  }

}
