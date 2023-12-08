import { Component, Input, OnInit } from '@angular/core';
import { House } from '../../data/House';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-houseinfos',
  templateUrl: './houseinfos.component.html',
  styleUrls: ['./houseinfos.component.scss'],
})
export class HouseinfosComponent /*implements OnInit*/ {
  constructor(private router: Router, private route: ActivatedRoute) { }

  @Input() house!: House;
  //house:House= {image:"assets/appartement2.jpg", numero : 1234 , housetype : "Appartment", rooms:4, price : 100000 }
  
  showDetails() {
    this.router.navigate([this.house.housetype], { relativeTo: this.route });
  }




}
