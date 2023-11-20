import { Component, OnInit } from '@angular/core';
import { HouseRepository } from '../../repository/house-repository';
import { House } from '../../data/house';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent  implements OnInit {
  houses!: House[];
  constructor(private houseRepository: HouseRepository) { }

  ngOnInit(): void {
    this.houses = this.houseRepository.houses;
  }

}
