import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { City } from '../models/city.model';
import { CitiesService } from '../services/cities.service';
import { HotelService } from '../services/hotels.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter: number;
  filteredName = '';
  cities: City[] = [];
  hotels: any = [];
  count = 0;
  constructor(private CitiesService: CitiesService, private route: ActivatedRoute, private hotelService: HotelService) {

  }

  ngOnInit() {
    this.CitiesService.getCities().subscribe((data) => {
      this.cities = data;
    })
    this.hotelService.getHotels().subscribe((data) => {
      this.hotels = data;
    })
  }

  // countHotel() {
  //   for (let i = 0; i < this.hotels.length; i++) {
  //     console.log(this.count++)
  //   }
  // }








}

