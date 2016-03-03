import {Injectable} from "angular2/core";

/**
 * Created by o.chantereau on 03.03.2016.
 */
@Injectable()
export class DialogService {

    confirm(message?:string){
        return new Promise<boolean>((resolve, rejet)=>resolve(window.confirm(message || 'Is it Ok?')));
    }
}