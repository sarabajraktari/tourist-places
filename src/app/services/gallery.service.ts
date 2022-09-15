import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class GalleryService {


    constructor(private http: HttpClient) { }

    baseUrl: any = environment.baseUrl;

    getGallery() {
        return this.http.get(this.baseUrl + "/gallery")
            .pipe(map((data) => {
                return data
            }))
    }
}