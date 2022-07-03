import { Component, AfterViewInit } from '@angular/core';
import { Focusable } from '../Utils/Focusable';
import  {skill} from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css','../globaltyles.css']
})
export class SkillsComponent extends Focusable implements AfterViewInit {

  public skillset:any;

  constructor() {

    super();
    this.skillset = skill;
    console.log(this.skillset)
   }

  ngAfterViewInit() {
    this.init("skills");
  }
}
