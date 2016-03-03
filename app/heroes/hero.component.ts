/**
 * Created by o.chantereau on 03.03.2016.
 */
import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroListComponent} from "./hero-list.component";
import {HeroService} from "./hero.service";
import {Router} from "angular2/router";
import {RouterOutlet} from "angular2/router";
@Component({
    template: `
    <h2>HEROES</h2>
    <router-outlet></router-outlet>
    `
    ,directives: [RouterOutlet]
    ,providers: [HeroService]
})
@RouteConfig(
    [
        {path:'/',        name: 'HeroList',       component: HeroListComponent, useAsDefault:true},
        {path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
    ]
)
export class HeroComponent {
    constructor(private _router:Router,
                private _heroService:HeroService){
    }
}