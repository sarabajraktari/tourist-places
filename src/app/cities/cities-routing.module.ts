import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

const routes: Routes = [
  {
    path: '', component: CitiesComponent, children: [
      { path: ':id', component: CityDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }
