<template>
  <div class="home">
    <div class="header">Header</div>
    <TodoContainer></TodoContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoContainer from './TodoContainer.vue';

export default {
  name: 'Home',
  components: {
    TodoContainer,
  },
};
</script>
