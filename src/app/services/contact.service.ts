import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ContactService {

    constructor(private http: HttpClient) { }

    baseUrl: any = environment.baseUrl;
    create(body: any) {
        return this.http.post(this.baseUrl + '/contacts', body)
            .pipe(map((data) => {
                return data;
            })
            );
    }

}