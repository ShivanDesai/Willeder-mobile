import Vue from "nativescript-vue";

import Home from "./components/Home";

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './font-awesome.css',
  'ion': './ionicons.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({

    render: h => h('frame', [h(Home)])
}).$start();
