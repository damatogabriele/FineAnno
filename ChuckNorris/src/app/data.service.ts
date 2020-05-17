import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class DataService {

    private REST_API_SERVER = "http://api.icndb.com/jokes/random/";
    private categoria1 = "http://api.icndb.com/jokes/random?exclude=[nerdy]";
    private categoria2 = "http://api.icndb.com/jokes/random?exclude=[explicit]";

    constructor(private httpClient: HttpClient) { }

    public sendGetRandomRequest() {
        return this.httpClient.get(this.REST_API_SERVER);

    }

    public sendGetCate1Request() {
        return this.httpClient.get(this.categoria1);

    }

    public sendGetCate2Request() {
        return this.httpClient.get(this.categoria2);

    }

}

