import { Injectable } from '@angular/core';
import {Guglanso}from './guglanso';

@Injectable({
  providedIn: 'root'
})
export class RootComponentService {

  constructor() { }
  ldinfo():Guglanso{
    const GUGLANSO:Guglanso ={
      studentnumber:'991498606',
      myname:'Sourav',
      lastname:'Guglani',
      campus:'Davis',
      assignmenttitle:'A4',
    };
    return GUGLANSO;
  }
}
