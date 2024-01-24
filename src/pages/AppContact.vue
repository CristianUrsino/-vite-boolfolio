<template>
    <div>
      <h1>Contattaci</h1>
      <ContactForm />
    </div>
  </template>
  
  <script>
  import { store } from '../store.js';
  import ContactForm from '../components/ContactForm.vue';
  
  export default {
    name: 'AppContact',
    data() {
      return {
        store,
      };
    },
    components: {
      ContactForm,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
