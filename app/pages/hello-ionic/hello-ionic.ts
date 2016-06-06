import {Page} from 'ionic-angular';
import {TranslatePipe} from "ng2-translate/ng2-translate";


@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
    pipes: [TranslatePipe]
})
export class HelloIonicPage {
  constructor() {

  }
}
