<template>
    <div>
      <h4>Parent Component</h4>
      <child-component :message="parentMessage" @childEvent="handleChildEvent">
        <p>This is a slot content inside ParentComponent.</p>
      </child-component>
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue'
  
  export default {
    data() {
      return {
        parentMessage: 'Hello from Parent Component!',
      }
    },
    components: {
      ChildComponent,
    },
    methods: {
      handleChildEvent(childEventData) {
        console.log(`Received event from ChildComponent: ${childEventData}`);
      },
    },
  }
  </script>