/**
 * Created by Freed on 2017/5/22.
 */
// 1.导入相关包
import Vue from 'vue';                    //引入vue
import vueRouter from  'vue-router';      //


// 2.导入组件
import hello from './hello.vue';          //引入vue模板
import Login from './login.vue';          //引入vue模板
import Reg from './reg.vue';              //引入vue模板

Vue.use(vueRouter);                       //vue使用路由这个模块

let router = new vueRouter({              //配置路由
    route:[
        {name:'Login',path:'/account/login/:username/:password',component:Login},
        {name:'Reg',path:'/account/reg/:username/:phone',component:Reg}
    ]
});

new Vue({
    el:'#hello',
    router,                              //vue初始化的时候使用配置好的,路由
    render:creat=>creat(hello)
});

