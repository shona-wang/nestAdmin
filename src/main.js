// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import './common/css/common.css';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import VueResource from 'vue-resource';
import columnList from './components/columnTable/columnList';
import columnContent from './components/columnTable/columnContent';
import articleList from './components/columnTable/articleList';
import articleType from './components/columnTable/articleType';
import articleLabel from './components/columnTable/articleLabel';
import passwordModify from './components/columnTable/passwordModify';
import menuEdit from './components/columnTable/menuEdit';
import userRights from './components/columnTable/userRights';
import commentList from './components/columnTable/commentList';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(Router);
let routes = [
	{path: '/columnList', component: columnList},
	{path: '/columnContent', component: columnContent},
	{path: '/articleList', component: articleList},
	{path: '/articleType', component: articleType},
	{path: '/articleLabel', component: articleLabel},
	{path: '/commentList', component: commentList},
	{path: '/passwordModify', component: passwordModify},
	{path: '/menuEdit', component: menuEdit},
	{path: '/userRights', component: userRights}
];
let router = new Router({
	routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
router.push({path: '/columnList'});

