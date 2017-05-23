<template>
    <div class="tpl">
        <div class="title1">
            {{msg}}
        </div>
        <div class="title2">
            <input type="text" v-model="username">
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