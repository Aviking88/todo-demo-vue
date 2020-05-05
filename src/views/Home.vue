<template>
  <div class="home">
    <div class="header">
      Header
    </div>
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
   // height: 90px;
  }
  TodoContainer {
    height: calc(100vh - 120px);
  }

}
</style>
