import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../models/city.model';
import { CitiesService } from '../services/cities.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cities: City[];

  constructor(private CitiesService: CitiesService, private route: Router) { }

  ngOnInit(): void {
    this.CitiesService.getCities().subscribe((data) => {
      this.cities = data;
    });

  }
  collapse = true;

  value = ''
  isCollapsed = false;


  clickedOutside(): void {
    this.collapse = true;
  }
  // toggleCollapsed(): void {
  //   this.isCollapsed = !this.isCollapsed;
  // }
  getById(index: number) {
    console.log(index);

    this.route.navigateByUrl(`cities/${index}`)

  }
}
