<template>
    <div v-if="project">{{ project.name }}</div>
    <div v-else>Loading...</div>
</template>

<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: null,
            store,
        };
    },
    methods: {
        getProjectData() {
            axios.get(`${this.store.apiUrl}/project/${this.$route.params.id}`)
            .then((res) => {
                if (res.data.success) {
                    this.project = res.data.results;
                } else {
                    console.error('Failed to fetch project data:', res.data.error);
                }
            })
            .catch((error) => {
                console.error('Error fetching project data:', error);
            });
        }
    },
    created() {
        this.getProjectData();
    }
}
</script>

<style lang="scss" scoped>
    
</style>
