<template>
    <div class="tpl">
        <h3>1.使用表达式</h3>
        <div class="title1">
            {{msg}}
        </div>
        <h3>2.使用v-model</h3>
        <div class="title2">
            {{username}}
            <input type="text" v-model="username">
        </div>
        <h3>3.使用v-text</h3>
        <div class="title3" v-text="dec1">

        </div>
        <h3>4.使用v-html</h3>
        <div class="title5" v-html="dec">

        </div>
        <h3>5.使用v-bind</h3>
        <div class="title4" v-bind:title="dec3">
            {{username}}
        </div>
        <h3>5.使用v-bind简写</h3>
        <div class="title4" :title="dec3">
            {{username}}
        </div>
        <h3>6.使用v-if简写</h3>
        <div class="title4" v-if="isok">
            {{username}}
        </div>
        <h3>6.使用v-on</h3>
        <div class="title4" >
            <button v-on:click="click">点击我</button>
        </div>
    </div>
</template>
<script>
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
            }
        },
        methods:{
        	click(){
        		alert('1');
            }
        }
    }
</script>
<style>
    .tpl{
        color: red;
    }
</style>