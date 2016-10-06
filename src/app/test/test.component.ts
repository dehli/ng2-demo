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
        this.highScore = 0;
    }

}