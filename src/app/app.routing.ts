import { RouterModule, Routes } from "@angular/router";

import { StudyComponent } from "./study";
import { TestComponent } from "./test";

const routes: Routes = [
    { path: "study", component: StudyComponent },
    { path: "test",  component: TestComponent },
    { path: "", redirectTo: "/study", pathMatch: "full" },
];

export const routing = RouterModule.forRoot(routes);
