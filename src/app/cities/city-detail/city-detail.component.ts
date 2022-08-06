import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { City } from 'src/app/models/city.model';
import { CitiesService } from 'src/app/services/cities.service';


@Component({
  selector: 'app-city-detal',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city: City;
  id: number;
  constructor(private CitiesService: CitiesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.city = this.CitiesService.getCity(this.id);
        }
      );

  }


}
