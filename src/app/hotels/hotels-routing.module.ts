import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelsComponent } from './hotels.component';

const routes: Routes = [
  {
    path: '', component: HotelsComponent, children: [
      { path: ':id', component: HotelDetailComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
