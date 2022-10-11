import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitiesComponent } from "./cities/cities.component";
import { CityDetailComponent } from "./cities/city-detail/city-detail.component";
import { HotelDetailComponent } from "./hotels/hotel-detail/hotel-detail.component";
import { HotelsComponent } from "./hotels/hotels.component";

const appRoutes: Routes = [

    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    { path: 'cities', loadChildren: () => import('./cities/cities.module').then(m => m.CitiesModule) },
    { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) }
    // {
    //     path: 'hotels',
    //     component: HotelsComponent,
    //     children: [
    //         {
    //             path: ':id',
    //             component: HotelDetailComponent,
    //             loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
    //         },
    //     ]
    // },
    // {
    //     path: 'cities',
    //     component: CitiesComponent,
    //     children: [
    //         {
    //             path: ':id',
    //             component: CityDetailComponent,
    //             loadChildren: () => import('./cities/cities.module').then(m => m.CitiesModule)
    //         },
    //     ]
    // }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]

})


export class AppRoutingModule {

}