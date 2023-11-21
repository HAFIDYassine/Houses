import { Injectable } from '@angular/core';
import { House } from 'src/app/home/data/House';
import { HouseRepository } from 'src/app/home/repository/house-repository';

@Injectable({
  providedIn: 'any'
})
export class HouseRepositoryDummyImpl extends HouseRepository {
  public get houses(): House [] {
    return [
      {numero : 1234 , housetype : "Appartment", rooms:4, price : 100000 },
      {numero : 456 , housetype : "House", rooms:4, price : 120000 },
      {numero : 7890 , housetype : "House", rooms:7, price : 300000 },
      {numero : 543 , housetype : "Appartment", rooms:5, price : 110000 },
      {numero : 876 , housetype : "House", rooms:5, price : 140000 }

    ];
  }

  
}
