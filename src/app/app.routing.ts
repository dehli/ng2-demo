import { RouterModule, Routes } from "@angular/router";

import { StudyComponent } from "./study";

const routes: Routes = [
    { path: "study", component: StudyComponent }
];

export const routing = RouterModule.forRoot(routes);
