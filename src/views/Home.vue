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
  created() {
    const userData = this.$store.state.userStore.user;
    if (userData && !userData.id) {
      this.$router.push('Login');
    }
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
    text-decoration: solid;
    text-transform: uppercase;
    padding: 24px;
    margin-bottom: 5px;
  }
  TodoContainer {
    height: calc(100vh - 120px);
  }

}
</style>
