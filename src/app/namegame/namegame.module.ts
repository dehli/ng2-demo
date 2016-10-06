// Core Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// App
import { NamegameComponent } from "./namegame.component";
import { DataService, NamesService } from "./shared";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NamegameComponent
    ],
    providers: [
        DataService,
        NamesService
    ]
})
export class NamegameModule {}