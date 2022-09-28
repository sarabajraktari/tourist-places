import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { map } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { touristPlaces } from 'src/app/models/tourist-places.model';
import { CitiesService } from 'src/app/services/cities.service';


@Component({
  selector: 'app-city-detal',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city: any = [];
  id: number;
  isReadMore = true;
  selectedId: any;
  touristPlaceDetail: any = [];
  constructor(private CitiesService: CitiesService, private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      // console.log(val);

      // see also 
      if (val instanceof NavigationEnd) {
        this.redirect(val.url.split('/')[2])
      }

    });
  }
  index: number;
  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.redirect(this.id)
  }

  redirect(id: any) {
    console.log(id);
    this.CitiesService.getCityById(id)
      .subscribe(cityData => {
        this.city = cityData;
      }, err => {
        console.log(err)
      });
  }


  showText() {
    this.isReadMore = !this.isReadMore;

  }

  toAccessId(touristPlace: any) {
    this.selectedId = touristPlace.id;
    this.touristPlaceDetail = touristPlace;

    // console.log(this.selectedId)
  }

}