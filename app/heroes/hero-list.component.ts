/**
 * Created by o.chantereau on 02.03.2016.
 */
import {Component, OnInit}   from 'angular2/core';
import {Hero, HeroService}   from './hero.service';
import {Router}              from 'angular2/router';
@Component({
    template: `
    <ul class="items">
      <li *ngFor="#hero of heroes"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    constructor(
        private _router: Router,
        private _service: HeroService) { }
    ngOnInit() {
        this._service.getHeroes().then(heroes => this.heroes = heroes)
    }
    onSelect(hero: Hero) {
        this._router.navigate( ['HeroDetail', { id: hero.id }] );
    }
}
