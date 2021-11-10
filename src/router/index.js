import Vue from "vue";
import Router from "vue-router";

import Form from "../components/Form.vue";
import FormNew from "../components/FormNew.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/new",
      component: FormNew,
    },
    {
      path: "/old",
      component: Form,
    },
  ],
});
