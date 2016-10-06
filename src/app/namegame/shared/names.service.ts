import { Injectable } from "@angular/core";
import { DataService, Person } from './data.service';

@Injectable()
export class NamesService {

    private promise: Promise<Person[]>;

    constructor(private dataService: DataService) {
        this.initialize();
    }

    private initialize(): void {
        this.promise = this.dataService.getNameGame();
    }

    public getRandomPerson(): Promise<Person> {
        const promise = new Promise((resolve, reject) => {
            this.promise
                .then(results => {
                    const index = Math.floor(Math.random() * results.length);
                    resolve(results[index]);
                })
                .catch(error => {
                    reject(error);
                });
        });

        return promise;
    }

}