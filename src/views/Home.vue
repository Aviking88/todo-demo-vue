<template>
  <div class="home">
    <h1 class="header">
      Todo App
    </h1>
    <TodoContainer></TodoContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoContainer from './TodoContainer.vue';

export default {
  name: 'Home',
  data() {
    return {
      completedSteps: 9,
      totalSteps: 10,
    };
  },
  components: {
    TodoContainer,
  },
};
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
  .header{
    color: #2196f3b8;
    text-decoration: solid;
    padding: 24px;
    border-bottom: 2px solid;
    margin-bottom: 20px;
  }
  TodoContainer {
    height: calc(100vh - 120px);
  }

}
</style>
