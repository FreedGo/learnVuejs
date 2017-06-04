<template>
    <div class="tpl">
        <!--<h3>1.使用表达式</h3>-->
        <!--<div class="title1">-->
            <!--{{msg}}-->
        <!--</div>-->
        <!--<h3>2.使用v-model</h3>-->
        <!--<div class="title2">-->
            <!--{{username}}-->
            <!--<input type="text" v-model="username">-->
        <!--</div>-->
        <!--<h3>3.使用v-text</h3>-->
        <!--<div class="title3" v-text="dec1">-->

        <!--</div>-->
        <!--<h3>4.使用v-html</h3>-->
        <!--<div class="title5" v-html="dec">-->

        <!--</div>-->
        <!--<h3>5.使用v-bind</h3>-->
        <!--<div class="title4" v-bind:title="dec3">-->
            <!--{{username}}-->
        <!--</div>-->
        <!--<h3>5.使用v-bind简写</h3>-->
        <!--<div class="title4" :title="dec3">-->
            <!--{{username}}-->
        <!--</div>-->
        <!--<h3>6.使用v-if简写</h3>-->
        <!--<div class="title4" v-if="isok">-->
            <!--{{username}}-->
        <!--</div>-->
        <h3>6.使用v-on</h3>
        <div class="title4" >
            <button v-on:click="click">点击我</button>
        </div>
        <h3>7.使用v-for</h3>
        <ul class="title6" >
            <li v-for="(item,index) in list">
                {{index}}{{item.name}}+{{item.sex}}+{{item.age}}+{{item.work}}+
            </li>
        </ul>
        <h3>7.使用子组件</h3>
        <!--使用子组件-->
        <son :toSon1="toSon"></son>
        <h3>8.我也使用子组件</h3>
        <stus :students="list"></stus>

        <h3>8.使用路由</h3>
        <!--使用子组件-->
        <router-link to="/account/login/freed/123456">登录</router-link>
        <router-link to="/account/login/freed/185165">注册</router-link>
        <router-view></router-view>

        <h3>7.使用过滤器和计算属性</h3>
        <!--使用子组件-->
        <input type="text" v-model="name">

        <hr>
        {{name|toLowerCaseStr|rePlace('i')}}

        <hr>
        {{toUpperCaseStr}}

    </div>
</template>
<script>
	import son from './components/son.vue';//导入子组建
    import stus from './components/stus.vue';

    export default {
        data(){
            return {
                msg:'Hello Vuejs',
                username:'张三李四王五',
                sex:'女',
                isok:true,
	            dec:'<h1>我是第一名</h1>',
	            dec1:'我是第1名',
	            dec2:'我是第2名',
	            dec3:'我是第3名',
                toSon:'好好学习，天天向上',
                name:'',
                list:[
                    { name:'张三',sex:'男',age:28,work:'jser'},
	                { name:'李四',sex:'女',age:28,work:'phper'},
	                { name:'王五',sex:'不男不女',age:28,work:'javaer'},
	                { name:'宋六',sex:'外星人',age:28,work:'c++er'}
                ]
            }
        },
        filters:{
        	toLowerCaseStr(input){
        		return input.toLowerCase();
            },
            rePlace(input,s){
        		return input.replace(s,'傻')
            }
        },
        methods:{
        	click(){
        		alert('1');
            }
        },
        components:{
            son, //注册子组件
	        stus
        },
        computed:{
	        toUpperCaseStr(){
	        	return this.name.toUpperCase()
            }
        }
    }
</script>
<style>
    .tpl{
        color: red;
    }
</style>