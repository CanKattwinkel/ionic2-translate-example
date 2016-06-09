import {TranslatePipe} from "ng2-translate/ng2-translate";
import {Component} from "@angular/core";


@Component({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
    pipes: [TranslatePipe]
})
export class HelloIonicPage {
  constructor() {

  }
}
