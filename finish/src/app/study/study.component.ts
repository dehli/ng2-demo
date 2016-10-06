import { Component, OnInit } from "@angular/core";
import { NamesService, Person } from "../shared";

@Component({
    selector: "study",
    template: require("./study.component.html"),
    styles:  [require("./study.component.scss")]
})
export class StudyComponent implements OnInit {

    private person: Person;

    constructor(private namegameService: NamesService) {}

    public ngOnInit(): void {
        this.getRandomPerson();
    }

    private getRandomPerson(): void {
        this.namegameService.getRandomPerson().then(person => this.person = person);
    }
}