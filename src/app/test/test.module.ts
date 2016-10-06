// Core Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// App
import { TestComponent } from "./test.component";
import { DataService, NamesService } from "../shared";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TestComponent
    ],
    providers: [
        DataService,
        NamesService
    ]
})
export class TestModule {}