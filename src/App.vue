<template>
  <!-- <AppHeader/> -->
  <router-view></router-view>
  <h1>app</h1>
</template>

<script>
import {store} from "./store";
export default{
  name: 'App',
  data(){
    return{
      store,
    };
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
