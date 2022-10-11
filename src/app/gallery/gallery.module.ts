import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GalleryRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class GalleryModule { }
