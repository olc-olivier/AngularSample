/**
 * Created by o.chantereau on 03.03.2016.
 */
import {Component} from "angular2/core";
import {RouterOutlet} from "angular2/router";
import {Router} from "angular2/router";
import {CrisisService} from "./crisis.service";
import {RouteConfig} from "angular2/router";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisListComponent} from "./crisis-list.component";

@Component({
    template: `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet],
    providers: [CrisisService]
})
@RouteConfig([
    {path: '/', name: 'CrisisList', component: CrisisListComponent, useAsDefault: true},
    {path: '/:id', name: 'CrisisDetail', component: CrisisDetailComponent}
])
export class CrisisCenterComponent {
    constructor(private _router:Router,
                private _crisisService:CrisisService) {
    }
}