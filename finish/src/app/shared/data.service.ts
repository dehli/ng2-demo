import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

export interface Person {
    name: string;
    url: string;
}

@Injectable()
export class DataService {

    private static baseURL: string = "http://api.namegame.willowtreemobile.com/";

    constructor(private http: Http) {}

    public getNameGame(): Promise<Person[]> {

        const promise = new Promise((resolve, reject) => {
            this.http.get(DataService.baseURL).forEach(response => {
                const json = response.json();
                resolve(json);
            })
            .catch(error => {
                reject(error);
            });
        });

        return promise;
    }
}