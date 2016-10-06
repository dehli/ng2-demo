import { Injectable } from "@angular/core";
import { DataService, Person } from "./data.service";
import { shuffle } from "./helpers";

export interface ITestPerson {
    person: Person;
    names: string[];
}

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

    public getRandomTestPerson(totalChoices: number = 5): Promise<ITestPerson> {
        const promise = new Promise((resolve, reject) => {
            this.promise
                .then(results => {
                    const index = Math.floor(Math.random() * results.length);
                    const person = results[index];

                    const names = [person.name];
                    while (names.length < totalChoices) {
                        const nameIndex = Math.floor(Math.random() * results.length);
                        const name = results[nameIndex].name;
                        if (names.indexOf(name) === -1) {
                            names.push(name);
                        }
                    }

                    resolve({
                        person,
                        names: shuffle(names)
                    });
                })
                .catch(error => reject(error));
        });

        return promise;
    }

}