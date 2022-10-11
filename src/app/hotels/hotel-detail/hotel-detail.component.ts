import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count, of, range } from 'rxjs';
import { HotelService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  id: number;
  hotels: any = [];
  p: number = 1;
  searchHotel: string;
  error: string;
  constructor(private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.redirect(this.id);
  }

  redirect(id: number) {
    this.hotelService.getHotelById(id)
      .subscribe(data => {
        this.hotels = data;
      }, err => {
        this.error = err;
      });
  }

}
