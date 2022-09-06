import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { City } from '../models/city.model';
import { CitiesService } from '../services/cities.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: City[];
  constructor(private CitiesService: CitiesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.cities = this.CitiesService.getCities();

  }



}

