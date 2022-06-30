import Vue from 'vue'; //引入vue
import App from './App.vue'; //引入 app.vue 应用的根组件

Vue.config.productionTip = false; //提示语

new Vue({
  //实例化vue对象出来
  render: (h) => h(App), //渲染根应用
}).$mount('#app'); //把渲染出的代码挂载到页面 app上
import 'bootstrap/dist/css/bootstrap.css'; // 默认找文件夹下的index文件(但是这个不是所以需要写路径)
