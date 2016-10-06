import { Component, OnInit } from "@angular/core";

@Component({
    selector: "test",
    template: require("./test.component.html"),
    styles:  [require("./test.component.scss")]
})
export class TestComponent implements OnInit {

    private highScore: number;

    constructor() {}

    public ngOnInit(): void {
        this.highScore = +localStorage.getItem("HIGH_SCORE");
    }

    private checkForHighScore(score: number): void {
        if (score > this.highScore) {
            alert("CONGRATS! New high score!");
            localStorage.setItem("HIGH_SCORE", "" + score);
            this.highScore = score;
        }
    }

}