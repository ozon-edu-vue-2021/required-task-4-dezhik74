import Vue from "vue";
import App from "./App.vue";
import "milligram";
import VueFormulate from "@braid/vue-formulate";
import { validateActualDate } from "./utils/validation";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueFormulate, {
  rules: {
    validateactualdate: validateActualDate,
  },
  classes: {
    error: "error-class",
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
