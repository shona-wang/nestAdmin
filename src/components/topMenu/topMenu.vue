<template>
	<div class="top-menu">
		<el-menu class="top-menu-list">
			<div class="title">
				<h1>网站后台管理系统</h1>
			</div>
			<ul class="content">
				 <el-menu-item v-for="(value,index) in topMenus" :key="index" :index="String(index)"><span :class="value.icon"></span>{{value.text}}</el-menu-item>
			</ul>
		 </el-menu>
  	</div>
</template>
<script>
	export default{
		data() {
			return {
				topMenus: [{
					'icon': 'icon-switch',
					'text': '登出'
				}]
			};
		}
	};
</script>
<style lang="less">
	.top-menu-list.el-menu{
		display: flex;
		background:#fff;
		height: 86px;
	}
	.top-menu-list .title{
		padding-left: 20px;
		font-size: 28px;
		color: #454545;
		line-height: 86px;
	}
	.top-menu-list .content .el-menu-item{
		margin-top: 10px;
		margin-right: 10px;
		line-height: 56px;
	}
	.top-menu .content{
		flex:1;
		display: inline-flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	.content .icon-switch{
		vertical-align: middle;
		margin-right: 5px;
	}
</style>