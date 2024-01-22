<template>
  <AppHeader />
  <router-view></router-view>
  <h1>app</h1>
</template>

<script>
import {store} from "./store";
import AppHeader from "./components/AppHeader.vue";
export default{
  name: 'App',
  data(){
    return{
      store,
    };
  },
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss" scoped>
//RICORDARE ASSETS
@use "./assets/style/partials/variables" as *;
h1{
  color: $font-color;
}
</style>
