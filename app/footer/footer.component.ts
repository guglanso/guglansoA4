import { Component, OnInit ,Input} from '@angular/core';
import {Guglanso}from '../guglanso';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Input() FooterIdea:Guglanso;

  ngOnInit() {
  }

}
