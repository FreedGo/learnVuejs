<template>
	<div class="father">
		<h1>{{msg}}</h1>
	</div>
	<div class="sons">
		<son :son="son"></son>
	</div>
</template>
<script>
import son from 'son.vue'
export default {
	data(){
		return{
			msg:'我是father',
			son1:{
				name:'张三',

			}
		}
	},
	components:{
		son
	},
}
</script>

<style>

</style>