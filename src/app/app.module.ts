// Core Angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

// App
import { AppComponent } from "./app.component";
import { NamegameModule } from "./namegame";
import { routing } from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
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