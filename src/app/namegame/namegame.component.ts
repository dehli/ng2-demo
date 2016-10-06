import { Component, OnInit } from "@angular/core";
import { NamesService, Person } from "./shared";

@Component({
    selector: "namegame",
    template: require("./namegame.component.html"),
    styles:  [require("./namegame.component.scss")]
})
export class NamegameComponent implements OnInit {

    private person: Person;

    constructor(private namegameService: NamesService) {}

    public ngOnInit(): void {
        this.getRandomPerson();
    }

    private getRandomPerson(): void {
        this.namegameService.getRandomPerson().then(person => this.person = person);
    }
}