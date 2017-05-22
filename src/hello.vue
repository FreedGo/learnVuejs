<template>
    <div class="tpl">
        {{msg}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'Hello Vuejs'
            }
        }
    }
</script>
<style>
    .tpl{
        color: red;
    }
</style>