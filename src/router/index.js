/* Router Component */

<template>
  <div id="app">
    <v-ons-toolbar>
      <nav>
        <router-link to "/">Home</router-link>
        <router-link to "/help">Help</v-ons-toolbar>
      </nav>
    </v-ons-toolbar>
    <router-view></router-view>
</template>

<script>
  import Vue from 'vue'
  import Router from 'vue-router'
  import Hello from '@/components/Hello'

  Vue.use(Router)

  const Home  = {
  template: '<div>Home</div>'
  }

  const Login = {
    template: '<div>Login</div>'
  }

  const Help = {
    template: '<div>Help?</div>'
  }

  let router = new Router({
    mode: 'history',
    routes: [
      { 
        path: '/', 
        name: 'Home', 
        component: main
      },
      { 
        path: '/login',
        name: 'Login',
        component: Login 
      },
    ]
  })

  export defauly router
  
</script>

