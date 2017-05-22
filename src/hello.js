/**
 * Created by Freed on 2017/5/22.
 */
import Vue from 'vue';
import hello from './hello.vue';

new Vue({
    el:'#hello',
    render:creat=>creat(hello)
});

