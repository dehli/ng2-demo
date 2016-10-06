// Core Angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

// App
import { AppComponent } from "./app.component";
import { StudyModule } from "./study";
import { routing } from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        routing,

        // App Modules
        StudyModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}