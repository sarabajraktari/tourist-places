import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';
import { CitiesService } from '../services/cities.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cities: City[];
  constructor(private CitiesService: CitiesService) { }

  ngOnInit(): void {
    this.cities = this.CitiesService.getCities();
  }
  collapse = true;

  value = ''
  isCollapsed = false;

  // toggleCollapsed(): void {
  //   this.isCollapsed = !this.isCollapsed;
  // }

}
