import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { FooterComponent } from './footer/footer.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './cities/city-detail/city-detail.component';
import { CitiesService } from './services/cities.service';
import { ClickOutsideDirective } from './shared/clickOutside.directive';
import { ContactService } from './services/contact.service';
import { GalleryService } from './services/gallery.service';
import { HotelService } from './services/hotels.service';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    CitiesComponent,
    CityDetailComponent,
    ClickOutsideDirective,
    HotelsComponent,
    HotelDetailComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdbDropdownModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NgbModule,
    MdbCheckboxModule,
    AppRoutingModule,


  ],
  providers: [CitiesService, ContactService, GalleryService, HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
