<template>
    <div>
      <div class="btn btn-success">{{ projectName }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      projectName: {
        type: String,
        required: true,
      },
    },
  };
  </script>

<style lang="scss" scoped>
    
</style>