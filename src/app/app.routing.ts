import { RouterModule, Routes } from "@angular/router";

import { NamegameComponent } from "./namegame";

const routes: Routes = [
    { path: "", component: NamegameComponent }
];

export const routing = RouterModule.forRoot(routes);
