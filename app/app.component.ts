/**
 * Created by o.chantereau on 01.03.2016.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroService} from "./heroes/hero.service";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";
import {CrisisService} from "./crisis-center/crisis.service";
import {DialogService} from "./dialog.service";

@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    providers:  [HeroService,DialogService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault:true},
    {path:'/heroes',        name: 'Heroes',       component: HeroListComponent},
    {path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
])
export class AppComponent { }
