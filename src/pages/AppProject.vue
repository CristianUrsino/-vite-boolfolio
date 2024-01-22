<template>
    <h1>PROGETTI</h1>
</template>
    
<script>
    import {store} from "../store";
    import axios from "axios";
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
@use "../assets/style/partials/variables" as *;
h1{
    color: $font-color;
}
</style>