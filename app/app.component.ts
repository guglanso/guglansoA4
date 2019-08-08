import { Component } from '@angular/core';
import {Guglanso}from './guglanso';
import {Option} from './option';

import {RootComponentService} from './rootcomponent.service';
import BreakFastJSON from '../assets/data/breakfast.json';
import LunchJSON from '../assets/data/lunch.json';
import DinnerJSON from '../assets/data/dinner.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guglansoA4';
  guglanso=Guglanso;
  BreakFastInfo:Option[] = BreakFastJSON.Breakfast;
  LunchInfo:Option[] = LunchJSON.lunch;
  DinnerInfo:Option[] = DinnerJSON.dinner;

  constructor(private rcservice:RootComponentService){}

  ngOnInIt(){
    this.ldfile();
  }
  ldfile():void{
    this.guglanso = this.rcservice.ldinfo();
  }
}
