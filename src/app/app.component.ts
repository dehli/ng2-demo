import { Component, OnInit } from "@angular/core";

//import "../style/app.scss";

@Component({
    selector: "app",
    template: require("./app.component.html"),
    styles:  [require("./app.component.scss")]
})
export class AppComponent implements OnInit {

    constructor() {}

    public ngOnInit(): void {
    }
}