/**
 * Created by o.chantereau on 02.03.2016.
 */
import {Hero} from './hero';
import {Injectable} from 'angular2/core';
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

}