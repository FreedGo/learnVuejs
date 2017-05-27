<template>
	<div class="son">
		<div>
			{{msg}}
		</div>
		<div>
			{{toSon}}
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:'这是自组建'
			}
		},
		props:['toSon']
	}
</script>
<style>
	.son{
		color: greenyellow;
	}
</style>