import { Component, OnInit } from "@angular/core";

@Component({
    selector: "namegame",
    template: require("./namegame.component.html"),
    styles:  [require("./namegame.component.scss")]
})
export class NamegameComponent implements OnInit {

    constructor() {}

    public ngOnInit(): void {
    }
}