<template>
    <div>
      <h5>Child Component</h5>
      <p>{{ message }}</p>
      <button @click="sendEventToParent">Send Event to Parent</button>
  
      <!-- Slot -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String,
    },
    methods: {
      sendEventToParent() {
        const eventData = 'Hello from Child Component!';
        this.$emit('childEvent', eventData);
      },
    },
  }
  </script>