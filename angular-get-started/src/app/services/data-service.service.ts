import { Injectable } from '@angular/core';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class DataServiceService {

  constructor() { }

  cars = ['Audi', 'BMW', 'Cadillac']

  getBrand(brand){
    return this.cars
    .find(car => car.toLowerCase() === brand.toLowerCase())
  }
}
