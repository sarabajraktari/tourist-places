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


  showText(index: number) {
    // this.city.touristPlaces.index
    this.isReadMore = !this.isReadMore;
    console.log("you clicked " + index)
  }


}
