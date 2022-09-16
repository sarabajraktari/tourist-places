import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, map } from "rxjs";
import { environment } from "src/environments/environment";
import { hotel } from "../models/hotel.model";

@Injectable()
export class HotelService {


    constructor(private http: HttpClient) { }
    baseUrl: any = environment.baseUrl;
    getHotels() {
        return this.http.get(this.baseUrl + "/hotels")
            .pipe(map((data) => {
                return data;
            }));
    }

    getHotelById(id: number) {
        return this.http.get(this.baseUrl + "/hotels/" + id)
            .pipe(map((data) => {
                return data;
            }))
    }




}