import { Component, OnInit } from "@angular/core";

//import "../style/app.scss";

@Component({
    selector: "app",
    template: `
        <router-outlet></router-outlet>
    `,
    //styleUrls:  ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    constructor() {}

    public ngOnInit(): void {
    }
}