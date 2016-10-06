// Core Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// App
import { StudyComponent } from "./study.component";
import { ClickImgComponent } from "./shared";
import { DataService, NamesService } from "../shared";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ClickImgComponent,
        StudyComponent
    ],
    providers: [
        DataService,
        NamesService
    ]
})
export class StudyModule {}