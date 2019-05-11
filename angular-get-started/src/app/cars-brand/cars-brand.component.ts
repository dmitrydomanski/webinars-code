import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-brand',
  templateUrl: './cars-brand.component.html',
  styleUrls: ['./cars-brand.component.scss']
})
export class CarsBrandComponent implements OnInit {
carBrand: string = ''
exists: string = ''

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  onBrandSubmit() {
    if (this.dataService.getBrand(this.carBrand)) {
      this.exists = 'We have this brand in database'
    } else {
      this.exists = 'No such brand in database'
    }

  }

}
