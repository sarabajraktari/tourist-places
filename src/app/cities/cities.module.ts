import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CitiesComponent } from './cities.component';


@NgModule({
  declarations: [
    CitiesComponent,
    CityDetailComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,

  ]
})
export class CitiesModule { }
