import { Injectable } from "@angular/core";
import { find, Observable, of } from "rxjs";
import { City } from "../models/city.model";
@Injectable({ providedIn: 'root' })
export class CitiesService {
    // getHomeCard(): Observable<any> {

    //     let cardArray = [{
    //         id: 1,
    //         name: 'Prizren',
    //         description: 'Most backpackers in Kosovo pass through Prizren, simply for its convenience, however this historic market city of Kosovo is a photographer’s paradise.  If you’re looking to take the famous photo of Prizren, you must find the stone bridge of Prizren.',
    //         imagePath: 'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-213161016106_orig.jpg'
    //     },
    //     {
    //         id: 2,
    //         name: 'Prishtina',
    //         description: 'Pristina is  the capital city of Kosovo. It`s full of interesting architecture, including the National Library… You can judge it for yourself!',
    //         imagePath: 'https://thebalkanista.com/wp-content/uploads/2019/11/69864330_1668378579964773_5072367861318549504_n.jpg'
    //     },
    //     {
    //         id: 3,
    //         name: 'Peja',
    //         description: 'Peja surprised me in the best way possible. ',
    //         imagePath: 'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-3616101429_orig.jpg'
    //     },
    //     {
    //         id: 4,
    //         name: 'Gjakova',
    //         description: 'Peja surprised me in the best way possible. ',
    //         imagePath: 'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-13516101538_orig.jpg'
    //     },
    //     {
    //         id: 5,
    //         name: 'Ferizaj',
    //         description: 'Peja surprised me in the best way possible. ',
    //         imagePath: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Ferizaj.jpg'
    //     },
    //     {
    //         id: 6,
    //         name: 'Gjilan',
    //         description: 'Peja surprised me in the best way possible. ',
    //         imagePath: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Gjilani_pas_dite.jpg'
    //     },
    //     ];
    //     return of(cardArray)
    // }


    private cities: City[] = [
        new City(
            0,
            'Prizren',
            'Most backpackers in Kosovo pass through Prizren, simply for its convenience, however this historic market city of Kosovo is a photographer’s paradise.  If you’re looking to take the famous photo of Prizren, you must find the stone bridge of Prizren.',
            'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-213161016106_orig.jpg'),
        new City(
            1,
            'Prishtina',
            'Pristina is  the capital city of Kosovo. It`s full of interesting architecture, including the National Library… You can judge it for yourself!',
            'https://thebalkanista.com/wp-content/uploads/2019/11/69864330_1668378579964773_5072367861318549504_n.jpg'),
        new City(
            2,
            'Peja',
            'Peja surprised me in the best way possible.',
            'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-3616101429_orig.jpg'),
        new City(
            3,
            'Gjakova',
            'Most backpackers in Kosovo pass through Prizren,',
            'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-13516101538_orig.jpg'),
        new City(
            4,
            'Ferizaj',
            'Most backpackers in Kosovo pass through Prizren,',
            'https://upload.wikimedia.org/wikipedia/commons/2/28/Ferizaj.jpg'),
        new City(
            5,
            'Gjilan',
            'Most backpackers in Kosovo passe312424 through Prizren,',
            'https://upload.wikimedia.org/wikipedia/commons/b/b0/Gjilani_pas_dite.jpg')
    ];

    getCities() {
        return this.cities.slice();
    }

    getCity(index: number) {
        return this.cities[index];
    }
}