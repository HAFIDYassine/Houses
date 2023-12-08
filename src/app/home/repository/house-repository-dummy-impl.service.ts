import { Injectable } from '@angular/core';
import { House } from 'src/app/home/data/House';
import { HouseRepository } from 'src/app/home/repository/house-repository';

@Injectable({
  providedIn: 'any'
})
export class HouseRepositoryDummyImpl extends HouseRepository {
  //public get houses(): House [] {
    _houses = [
      {image:"assets/appartement2.jpg", numero : 1234 , housetype : "Appartment", rooms:4, price : 100000},
      {image:"assets/maison3.jpg", numero : 456 , housetype : "House", rooms:4, price : 120000},
      {image:"assets/maison1.jpg", numero : 7890 , housetype : "House", rooms:7, price : 300000},
      {image:"assets/appartement1.jpg", numero : 543 , housetype : "Appartment", rooms:5, price : 110000},
      {image:"assets/maison2.jpg", numero : 876 , housetype : "House", rooms:5, price : 140000}

    ];

    public get houses(): House [] {
      return this._houses;
    }

    public getHouse(housetype: String): House|undefined {
      return this._houses.find(house => house.housetype === housetype) as House;
      
    }

  
}
