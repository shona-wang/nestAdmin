<template>
	<el-row>
		 <el-col :span="4">
			<nodeTree></nodeTree>
		 </el-col>
		 <el-col :span="20">
			<div class="table-list">
				<el-table :data="tableData3" border style="width: 100%" @selection-change="handleSelectionChange">
				    <el-table-column  type="selection"  width="55"></el-table-column>
				    <el-table-column  prop="name" label="栏目名称" width="220">
				      <template scope="scope">{{ scope.row.name }}</template>
				    </el-table-column>
				    <el-table-column  prop="url" label="链接地址"></el-table-column>
				    <el-table-column  prop="time" label="录入时间" align="center"  width="180"></el-table-column>
				    <el-table-column  prop="person" label="创建人"  width="180"></el-table-column>
			  	</el-table>
				<pagination></pagination>
			</div>
		 </el-col>
	</el-row>
</template>
<script>
import nodeTree from '../nodeTree/nodeTree.vue';
import pagination from '../pagination/pagination.vue';
export default{
	data() {
		return {
			tableData3: [{
				name: '首页',
			 	url: 'http://baidu.com',
			  	time: '2017-02-12',
			  	person: '王小窝'
			},
			{
				name: '博客',
			 	url: 'http://baidu.com',
			  	time: '2017-02-12',
			  	person: '王小窝'
			},
			{
				name: 'UI组件',
			 	url: 'http://baidu.com',
			  	time: '2017-02-12',
			  	person: '王小窝'
			},
			{
				name: '常用插件',
			 	url: 'http://baidu.com',
			  	time: '2017-02-12',
			  	person: '王小窝'
			}]
		};
	},
	created() {
		// console.log(this);
		// this.$http.get('http://localhost:82/cms/service/column.aspx?method=tree_query').then((response) => {
		// 	console.log(response);
		// });
	},
	methods: {
		handleSelectionChange(val) {
			this.multipleSelection = val;
	    }
	},
	components: {
		nodeTree,
		pagination
	}
};
</script>
<style>
	.table-list{
		margin: 15px 10px 0 0 !important;
	}
</style>