import 'angular';
import 'index.css';

class AppController {

  title: string;
  info: any;

  constructor() {
    this.title = 'Angular Webpack Minimal Starter';
    this.info = angular.version;
  }

}

angular.module('app', [])
.controller('AppController', AppController);

angular.bootstrap(document, ['app']);
