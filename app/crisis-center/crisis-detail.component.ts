/**
 * Created by o.chantereau on 03.03.2016.
 */
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {CanDeactivate} from "angular2/router";
import {Crisis} from "./crisis";
import {routerCanDeactivate} from "angular2/src/router/lifecycle_annotations_impl";
import {CrisisService} from "./crisis.service";
import {Router} from "angular2/router";
import {ComponentInstruction} from "angular2/router";
import {RouteParams} from "angular2/router";
import {DialogService} from "../dialog.service";
@Component({
    template: `
    <h2>HEROES</h2>
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
    `
    ,
    styles: ['input {width: 20em}']
})
export class CrisisDetailComponent implements OnInit, CanDeactivate {

    crisis:Crisis;
    editName:string;

    constructor(private _router:Router,
                private _service:CrisisService,
                private _routeParams:RouteParams,
                private _dialog:DialogService) {
    }

    cancel() {
        this.editName = this.crisis.name;
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() {
        this._router.navigate(['CrisisList']);
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._service.getCrisis(id).then(crisis=> {
            if (crisis) {
                this.editName = crisis.name;
                this.crisis = crisis;
            } else {
                this.gotoCrises();
            }}
            );
    }

    routerCanDeactivate(next:ComponentInstruction, prev:ComponentInstruction):any {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this._dialog.confirm('Discard changes?');
    }
}