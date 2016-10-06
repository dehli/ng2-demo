// Core Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// App
import { TestComponent } from "./test.component";
import { TesterComponent } from "./shared";
import { DataService, NamesService } from "../shared";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TestComponent,
        TesterComponent
    ],
    providers: [
        DataService,
        NamesService
    ]
})
export class TestModule {}