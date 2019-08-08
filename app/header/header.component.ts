import { Component, OnInit ,Input} from '@angular/core';
import {Guglanso}from '../guglanso';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() headerdetail:Guglanso;

  ngOnInit() {
  }

}
