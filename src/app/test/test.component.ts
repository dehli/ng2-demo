import { Component, OnInit } from "@angular/core";
import { NamesService, Person } from "../shared";

@Component({
    selector: "test",
    template: require("./test.component.html"),
    styles:  [require("./test.component.scss")]
})
export class TestComponent implements OnInit {

    private person: Person;

    constructor(private namegameService: NamesService) {}

    public ngOnInit(): void {
        this.getRandomPerson();
    }

    private getRandomPerson(): void {
        this.namegameService.getRandomPerson().then(person => this.person = person);
    }
}