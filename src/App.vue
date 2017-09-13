<template>
<div id="app">
       <verticalMenu></verticalMenu>
       <div class="content-box">
         <topMenu></topMenu>
         <nest-content></nest-content>
       </div>
</div>
</template>

<script>
import topMenu from './components/topMenu/topMenu.vue';
import verticalMenu from './components/verticalMenu/verticalMenu.vue';
import content from './components/content/content.vue';

export default {
  components: {
    topMenu,
    verticalMenu,
    'nest-content': content
  }
};
</script>

<style>
  #app{
    width: 100%;
    height:  100%;
  }
  .content-box{
    margin-left: 200px;
  }
</style>
