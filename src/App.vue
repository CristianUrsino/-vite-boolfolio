<template>
  <div>ciao</div>
  <ul>
    <li v-for="project in projects">
      {{project.name}}
    </li>
  </ul>
</template>

<script>
import {store} from "./store";
import axios from "axios";
export default{
  name: 'App',
  data(){
    return{
      store,
      projects:[],
    };
  },
  methods: {
    getAllProjects(){
      axios.get(store.apiUrl + "/project", {params: {page: this.currentPage}}).then((res) => {
        this.projects = res.data.results.data;
        console.log(this.projects);
      });
    },
  },
  mounted(){
    this.getAllProjects();
  }
}
</script>

<style>
</style>
