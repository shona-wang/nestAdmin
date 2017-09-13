<template>
	<div class="table-list">
		<el-table :data="tableData3" border style="width: 100%" @selection-change="handleSelectionChange">
		    <el-table-column  type="selection"  width="55"></el-table-column>
		    <el-table-column  prop="name" label="名称" width="220">
		      <template scope="scope">{{ scope.row.name }}</template>
		    </el-table-column>
		    <el-table-column  prop="title" label="内容主标题"></el-table-column>
		    <el-table-column  prop="type" label="状态"  width="180"></el-table-column>
		    <el-table-column  prop="time" label="创建时间"  width="180"></el-table-column>
		    <el-table-column  prop="person" label="创建人"  width="180"></el-table-column>
	  	</el-table>
	</div>
</template>
<script>
export default{
	data() {
		return {
			tableData3: [{
				name: '首页',
			 	title: '内容主标题',
			 	type: '已发布',
			  	time: '2017-02-12',
			  	person: '王小窝'
			},
			{
				name: '博客',
			 	title: '内容主标题',
			 	type: '已发布',
			  	time: '2017-02-12',
			  	person: '王小窝'
			},
			{
				name: 'UI组件',
			 	title: '内容主标题',
			 	type: '已发布',
			  	time: '2017-02-12',
			  	person: '王小窝'
			},
			{
				name: '常用插件',
			 	title: '内容主标题',
			 	type: '已发布',
			  	time: '2017-02-12',
			  	person: '王小窝'
			}]
		};
	},
	methods: {
		handleSelectionChange(val) {
			this.multipleSelection = val;
	    }
	}
};
</script>
<style>
	.table-list{
		margin: 15px 10px;

	}
</style>