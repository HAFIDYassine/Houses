import { Component, Input, OnInit } from '@angular/core';
import { House } from '../../data/House';


@Component({
  selector: 'app-houseinfos',
  templateUrl: './houseinfos.component.html',
  styleUrls: ['./houseinfos.component.scss'],
})
export class HouseinfosComponent   {

  @Input() house!: House;
  



}
