<template>
    <div class="tmpl">
        <h1>{{dec}}</h1>
        <p>用户名:{{username}}</p>
        <p>手机号:{{phone}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                dec:'这是注册组件',
            }
        }
    }
</script>