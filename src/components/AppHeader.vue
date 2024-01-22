<template>
    <ul class="my-5 d-flex">
        <li v-for="tab in store.headerLinks" :key="tab.id" class="me-5">
            <router-link :to=" tab.link">
                {{ tab.name }}
            </router-link>  
        </li>
    </ul>
</template>

<script>
import {store} from "../store";
export default{
    name:'AppHeader',
    data(){
        return{
            store
        }
    }
}
</script>

<style lang="scss" scoped>
    li{
        list-style-type: none;
    }
</style>