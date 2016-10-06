// Core Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// App
import { NamegameComponent } from "./namegame.component";
import { DataService, ClickImgComponent, NamesService } from "./shared";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ClickImgComponent,
        NamegameComponent
    ],
    providers: [
        DataService,
        NamesService
    ]
})
export class NamegameModule {}