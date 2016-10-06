import { Component, OnInit } from "@angular/core";
import { NamesService, Person } from "../../../shared";

@Component({
    selector: "tester",
    template: require("./tester.component.html"),
    styles:  [require("./tester.component.scss")]
})
export class TesterComponent implements OnInit {

    private score: number;

    private person: Person;

    constructor(private namesService: NamesService) {}

    public ngOnInit(): void {
        this.namesService.getRandomPerson().then(result => this.person = result);
    }

}