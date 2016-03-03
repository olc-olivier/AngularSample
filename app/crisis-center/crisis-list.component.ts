/**
 * Created by o.chantereau on 02.03.2016.
 */
import {Component, OnInit} from 'angular2/core';
import {CrisisService} from './crisis.service';
import {Router} from 'angular2/router';
import {Crisis} from "./crisis";
@Component({
    template: `
    <ul class="items">
      <li *ngFor="#crisis of crises"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class CrisisListComponent implements OnInit {
    crises: Crisis[];
    constructor(
        private _service: CrisisService,
        private _router: Router) {}
    ngOnInit() {
        this._service.getCrises().then(crises => this.crises = crises);
    }
    onSelect(crisis: Crisis) {
        this._router.navigate(['CrisisDetail', { id: crisis.id }]  );
    }
}
