<template>
	<div class="content-detail"> 
		<breadCrumb :menuPath="menuPath"></breadCrumb>
		<div class="middle">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import breadCrumb from '../breadCrumb/breadCrumb.vue';

	export default{
		props: {
			menuPath: {
				type: Array
			}
		},
		components: {
			breadCrumb
			// handleButton
		}
	};
</script>
<style>
</style>