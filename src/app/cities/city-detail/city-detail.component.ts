import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
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
  cities: City[];
  id: number;
  isReadMore = true


  constructor(private CitiesService: CitiesService, private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      // console.log(val);

      // see also 
      if (val instanceof NavigationEnd) {
        this.redirect(val.url.split('/')[2])
      }

    });
  }

  ngOnInit() {

    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.city = this.CitiesService.getCity(this.id);
    //     }
    //   );
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

  getCities() {
    this.CitiesService.getCities().subscribe((data) => {
      this.cities = data;
    })
  }



  showText() {

    this.isReadMore = !this.isReadMore

  }

}
