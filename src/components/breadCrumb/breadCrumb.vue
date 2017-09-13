<template>
	<div class="bread-crumb">
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item v-for="(val,index) in menuPath" :to="{ path: '/' }" :key="index">
		 	 {{val}}
		   </el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>
<script>
import { eventHub } from '../eventHub.vue';
export default{
	data() {
		return {
			menuPath: ['栏目维护', '栏目列表']
		};
	},
	created() {
		eventHub.$on('change', (path) => {
			this.menuPath = path;
		});
	}
};
</script>
<style>
	.bread-crumb{
		height: 56px;
		background: #eef1f6;
	}
	.bread-crumb .el-breadcrumb{
		line-height: 56px;
		font-size: 14px;
		padding-left: 20px;
	}
</style>