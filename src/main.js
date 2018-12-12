<template>
<v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <p style="text-align: center; margin-top: 40px;">
      <v-ons-button modifier="cta material" to="login" href="#">
        Login With Spotify
      </v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import 'onsenui/css/onsenui.css';
  import 'onsenui/css/onsen-css-components.css';
  import VueOnsen from 'vue-onsenui';
  import App from './App.vue';
  //import router from './router';

  Vue.config.productionTip = false
  Vue.use(VueOnsen)
  Vue.use(VueRouter)

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    //render: h => h(App),
  })
  // .$mount('#app')
</script>

<style>
  
</style>