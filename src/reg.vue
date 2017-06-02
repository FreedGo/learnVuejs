<template>
	<div class="tmpl">
		<h1>{{dec}}</h1>
		<p>用户名：{{this.$route.params.username}}</p>
		<p>密码：{{this.$route.params.phone}}</p>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				dec:'这是注册框'
			}
		}
	}
</script>