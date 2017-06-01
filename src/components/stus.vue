<template>
	<dl class="classroom">
		<dd>{{dec}}</dd>
		<dt v-for="(item,index) in students" >
			{{index}}:姓名：{{item.name}},性别：{{item.sex}},年龄：{{item.age}},工作：{{item.work}}
		</dt>
	</dl>
</template>
<script>
	export default{
		data(){
			return{
				dec:'这是一个教室'
			}
		},
		props:['students']
	}
</script>
<style>
	.classroom{
		border:#ccc dashed 1px;
	}
	.classroom dd{
		font-size:20px;
		border-bottom: #eee solid 1px;
	}
	.classroom dt{
		border-bottom: #eee solid 1px;

	}
</style>