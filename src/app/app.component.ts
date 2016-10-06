import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app",
    template: require("./app.component.html"),
    styles:  [require("./app.component.scss")]
})
export class AppComponent {

    constructor(private router: Router) {}

    private navigateToStudy(): void {
        this.router.navigate([ "/study" ]);
    }

    private navigateToTest(): void {
        this.router.navigate([ "/test" ]);
    }

}