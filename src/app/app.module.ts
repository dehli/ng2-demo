// Core Angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

// App
import { AppComponent } from "./app.component";
import { NamegameModule } from "./namegame";
import { routing } from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        routing,

        // App Modules
        NamegameModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}