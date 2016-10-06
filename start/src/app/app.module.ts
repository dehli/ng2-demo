// Core Angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

// App
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}