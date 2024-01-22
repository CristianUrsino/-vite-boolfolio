<template>
    <h1>Page not found</h1>
    <router-link to="/" class="home-link">Go to Home</router-link>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>

<style lang="scss" scoped>
    h1{
        color: red;
    }
</style>