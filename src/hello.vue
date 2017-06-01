<template>
    <div class="tpl">
        <div class="title1">
            {{msg}}
        </div>
        <div class="title2">
            <input type="text" v-model="username">
        </div>
        <div class="luyou">
            <h1>路由</h1>
            <router-link to="/accouont/login/">登录</router-link>
            <router-link to="/accouont/login/">注册</router-link>
            <!--占位-->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'Hello Vuejs,泪奔,终于跑起来了',
                username:'我叫张三'
            }
        }
    }
</script>
<style>
    .tpl{
        color: red;
    }
</style>