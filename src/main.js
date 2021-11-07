import Vue from "vue";
import App from "./App.vue";
import "milligram";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
