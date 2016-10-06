import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NamesService, ITestPerson } from "../../../shared";

@Component({
    selector: "tester",
    template: require("./tester.component.html"),
    styles:  [require("./tester.component.scss")]
})
export class TesterComponent implements OnInit {

    @Output() finishedGame = new EventEmitter<number>();

    private score: number;

    private test: ITestPerson;

    constructor(private namesService: NamesService) {}

    public ngOnInit(): void {
        this.score = 0;
        this.newQuestion();
    }

    private clickName(name: string): void {
        if (this.test.person.name === name) {
            this.score += 1;
        } else {
            this.finishedGame.emit(this.score);
            this.score = 0;
        }

        this.newQuestion();
    }

    private newQuestion(): void {
        this.test = null;
        this.namesService.getRandomTestPerson().then(result => this.test = result);
    }

}