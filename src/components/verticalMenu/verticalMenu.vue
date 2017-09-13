<template>
	<div class="vertical-menu" >
		<div class="logo">
			<img src="./logo.png" />
		</div>
		<el-menu :default-active="verticalMenus[0].content[0].num"  :default-openeds="[verticalMenus[0].num]" class="el-menu-vertical-demo el-menu--dark" @open="handleOpen" @close="handleClose">
	     	 <el-submenu v-for="(val,index) in  verticalMenus" :index="val.num" :key="index" > 
		        <template slot="title"><i :class="val.icon"></i>{{val.title}}</template>
					<el-menu-item-group>
					  <el-menu-item  v-for="(v,i) in val.content" :index="v.num" :key="i" :title="val.title" @click="choosePath(v.title)">
					  	<router-link :to="v.link">{{v.title}}</router-link>
					  </el-menu-item>
					</el-menu-item-group>
			</el-submenu>
	    </el-menu>
	</div>
</template>
<script>
import { eventHub } from '../eventHub.vue';
export default{
	data() {
		return {
			verticalMenus: [{
				'num': '1',
				'title': '栏目维护',
				'icon': 'el-icon-message',
				'content': [
					{
						'num': '1-1',
						'title': '栏目列表',
						'link': '/columnList',
						'icon': 'el-icon-message'
					},
					{
						'num': '1-2',
						'title': '栏目静态文章',
						'link': '/columnContent',
						'icon': 'el-icon-message'
					}
				]
			},
			{
				'num': '2',
				'title': '文章管理',
				'icon': 'el-icon-message',
				'content': [
					{
						'num': '2-1',
						'title': '文章列表',
						'link': '/articleList',
						'icon': 'el-icon-message'
					},
					{
						'num': '2-2',
						'title': '文章类型',
						'icon': 'el-icon-message',
						'link': '/articalType'
					},
					{
						'num': '2-3',
						'title': '文章标签',
						'icon': 'el-icon-message',
						'link': '/articalLabel'
					}
				]
			},
			{
				'num': '3',
				'title': '评论管理',
				'icon': 'el-icon-message',
				'content': [
					{
						'num': '3-1',
						'title': '评论列表',
						'icon': 'el-icon-message',
						'link': '/commentList'
					} ]
				},
				{
				'num': '4',
				'title': '系统管理',
				'icon': 'el-icon-message',
				'content': [
						{
							'num': '4-1',
							'title': '修改密码',
							'icon': 'el-icon-message',
							'link': '/passwordModify'
						},
						{
							'num': '4-2',
							'title': '功能菜单管理',
							'icon': 'el-icon-message',
							'link': '/menuEdit'
						},
						{
							'num': '4-3',
							'title': '用户权限管理',
							'icon': 'el-icon-message',
							'link': '/userRights'
						}
					]
				}
			],
			paths: []
		};
	},
	methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      choosePath(path) {
      	let parent = '';
      	if (event) event.stopPropagation();
      	if (event.target.localName === 'a') {
      		parent = event.target.parentNode;
      	} else if (event.target.localName === 'li') {
      		parent = event.target;
      	}
      	let title = parent.getAttribute('title');
      	this.paths = [title, path];
      	eventHub.$emit('change', this.paths);
      }
    }
};
</script>
<style>
	.vertical-menu{
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		background: #324157;
		width: 200px;
	}
	.vertical-menu .logo{
		width: 100%;
		height: 86px;
		background: #00B38B;
	}
	.vertical-menu .logo img{
		display: block;
		margin: 0 auto;
		padding-top: 20px;
		width:120px;
	}
	.vertical-menu .el-menu{
		overflow-y: auto;
	}
	.vertical-menu .el-submenu .el-menu-item{
		padding: 0 !important;
	}
	.vertical-menu .el-submenu .el-menu-item a{
		display: block;
		height: 100%;
		padding-left: 40px;
	}
	.el-menu-item.is-active a{
		color: #bfcbd9;
	}
</style>