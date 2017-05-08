import * as Vue from 'vue';

interface Options {
  el: Element | string
}


Vue.component('app-layout', {
  template: '<div>' +
  '<header><h1>Basic vue.js Application</h1></header>' +
  '<content>Sample hard coded content</content>' +
  '<footer><small>This is a footer</small></footer>' +
  '</div>'
})

export class App {

  constructor(public options: Options) { }

  start(): void {
    console.info("vue-app was startet.");
    new Vue({
      el: this.options.el,

    });
  }
}

