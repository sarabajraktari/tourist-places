import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelsRoutingModule } from './hotels-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelsComponent } from './hotels.component';



@NgModule({
  declarations: [
    HotelsComponent,
    HotelDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HotelsRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ]
})
export class HotelsModule { }
