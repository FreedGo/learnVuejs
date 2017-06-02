/**
 * Created by Freed on 2017/5/22.
 */

import Vue from 'vue';
import vueRouter from 'vue-router';


import hello from './hello.vue';
import login from './login.vue';
import reg from  './reg.vue';

Vue.use(vueRouter);
// Vue.filter('toUpperCaseStr',function (input) {
//     return input.toUpperCase()
// });

var router = new vueRouter({
    routes:[
	    {name:'login',path:'/account/login/:username/:password',component:login},
	    {name:'reg',path:'/account/login/:username/:phone',component:reg},
    ]
});

new Vue({
    el:'#hello',
    router,
    render:creat=>creat(hello)
});

