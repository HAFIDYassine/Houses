import { Component, OnInit } from '@angular/core';
import { HouseRepository } from '../../repository/house-repository';
import { ActivatedRoute } from '@angular/router';
import { House } from '../../data/House';

@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.scss'],
})
export class HousedetailsComponent  implements OnInit {
  house: House|undefined = undefined

  constructor(private houserepository:HouseRepository, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('housetype');
    if (name != null) {
      this.house = this.houserepository.getHouse(name);
    }
  }

}
