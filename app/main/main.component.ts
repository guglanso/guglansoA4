import { Component, OnInit ,Input} from '@angular/core';
import {Option} from '../option';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() BreakfastList: Option;
  @Input() LunnchList: Option;
  @Input() DinnerList: Option;
  
  constructor() { }

  ngOnInit() {
  }

}
