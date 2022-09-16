import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitiesComponent } from "./cities/cities.component";
import { CityDetailComponent } from "./cities/city-detail/city-detail.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { HotelDetailComponent } from "./hotels/hotel-detail/hotel-detail.component";
import { HotelsComponent } from "./hotels/hotels.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'cities', component: CitiesComponent, children: [
            { path: ':id', component: CityDetailComponent }
        ]
    },
    {
        path: 'hotels', component: HotelsComponent, children: [
            { path: ':id', component: HotelDetailComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]

})


export class AppRoutingModule {

}