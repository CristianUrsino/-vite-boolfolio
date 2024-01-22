<template>
  <div>
    <router-view></router-view>
    <h1>PROGETTO</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="{ name: 'project-detail', params: { id: project.id } }" class="btn btn-success">
          {{ project.name }}
        </router-link>
      </li>
    </ul>
    <button class="btn" :class="{ 'disabled': !nextButtonStatus }" @click="nextPage" :disabled="!nextButtonStatus">
      avanti
    </button>
    <button class="btn" :class="{ 'disabled': !prevButtonStatus }" @click="previousPage" :disabled="!prevButtonStatus">
      indietro
    </button>
  </div>
</template>
  
  <script>
  import { RouterLink } from 'vue-router';
  import {store} from "../store";
  import axios from "axios";
  export default{
    name: 'App',
    data(){
      return{
        store,
        projects:[],
        currentPage: 1,
        prevButtonStatus:false,
        nextButtonStatus:true,
        lastPage: 0,
      };
    },
    components: {
      RouterLink,
    },
    methods: {
      getAllProjects(){
        axios.get(store.apiUrl + "/project", {params: {page: this.currentPage}}).then((res) => {
          this.projects = res.data.results.data;
          // console.log(this.projects);
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
          if(this.lastPage === 1){
            this.nextButtonStatus = false;
          }
        });
      },
      nextPage(){
        console.log('next');
        this.prevButtonStatus = true;
        this.currentPage = this.currentPage +1;
        this.getAllProjects();
        if (this.currentPage === this.lastPage) {
          this.nextButtonStatus = false;
        }
      },
      previousPage(){
        console.log('prev');
        this.nextButtonStatus = true;
        this.currentPage = this.currentPage -1;
        this.getAllProjects();
        if (this.currentPage === 1) {
          this.prevButtonStatus = false;
        }
      }
    },
    mounted(){
      this.getAllProjects();
    }
  }
  </script>
  
  <style lang="scss" scoped>
  //RICORDARE ASSETS
  @use "../assets/style/partials/variables" as *;
  h1{
    color: $font-color;
  }
  </style>