import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { City } from "../models/city.model";
import { geography } from "../models/geography.model";
import { history } from "../models/history.model";
import { touristPlaces } from "../models/tourist-places.model";

@Injectable({ providedIn: 'root' })
export class CitiesService {

    constructor(private http: HttpClient) { }
    baseUrl: any = environment.baseUrl;


    getCities() {
        return this.http.get<City[]>(this.baseUrl + '/cities')
            .pipe(map((data) => {
                return data;
            })
            )
    }

    getCityById(index: number) {
        return this.http.get<City[]>(this.baseUrl + '/cities/' + index)
            .pipe(map((data) => {
                return data;
            })
            );
    }




}