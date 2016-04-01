// Angular2
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// Components
import {MainMenu} from './components/main-menu/main-menu';

// Routes
import {SongWheelRoot} from './song-wheel/song-wheel-root.component';
import {OptionsRoot} from './options/options-root.component';


@Component({
  selector: 'rhythmos-app',
  providers: [],
  templateUrl: 'app/rhythmos.html',
  directives: [ROUTER_DIRECTIVES, MainMenu],
  pipes: []
})
@RouteConfig([
  {path:'/', name: 'Rhythmos', component: MainMenu, useAsDefault: true},
  {path:'/song-wheel/...', name: 'SongWheel', component: SongWheelRoot},
  {path:'/options/...', name: 'Options', component: OptionsRoot}
])
export class RhythmosApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
