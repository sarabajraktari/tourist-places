import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = true;
  error: string;
  private innerWidth: number;
  private mobileBreakpoint = 480;

  constructor(private CitiesService: CitiesService,
    private route: ActivatedRoute,
    private hotelService: HotelService) {
  }

  ngOnInit() {
    this.CitiesService.getCities().subscribe((data) => {
      this.cities = data;
    },
      error => {
        this.error = error;
      });

    this.hotelService.getHotels().subscribe((data) => {
      this.hotels = data;
    },
      error => {
        this.error = error;
      })

    this.hotels = this.redirect(this.id);
    this.adjustsItemsPerSlide();
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
    // .subscribe(data => {
    //   this.hotels = data;
    // }, err => {
    //   console.log(err)
    // });
  }

  private adjustsItemsPerSlide() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < this.mobileBreakpoint) {
      this.itemsPerSlide = 1;
    } else {
      this.itemsPerSlide = 4;
    }
  }



}

