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
  id: number;
  cities: City[] = [];
  hotels: any = [];
  constructor(private CitiesService: CitiesService,
    private route: ActivatedRoute,
    private hotelService: HotelService) {



  }

  ngOnInit() {
    this.CitiesService.getCities().subscribe((data) => {
      this.cities = data;
    })
    this.hotelService.getHotels().subscribe((data) => {
      this.hotels = data;
    })

    this.hotels = this.redirect(this.id);
  }

  //count how many hotels we have at cities
  ObjectLength(object: any) {
    var length = 0;
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        ++length;
      }
    }
    return length;
  };

  redirect(id: number) {
    this.hotelService.getHotelById(id)
      .subscribe(data => {
        this.hotels = data;
      }, err => {
        console.log(err)
      });
  }


}

