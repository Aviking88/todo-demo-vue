<template>
  <div class="todo-view-container">
    <radial-progress-bar
    :diameter="90"
    :completed-steps="completedTodos"
    :total-steps="todoList.length">
    <div class="counter">
      <div class="top">{{ completedTodos }}</div>
      <div class="part">/</div>
      <div class="bottom">{{ todoList.length }}</div>
    </div>
    </radial-progress-bar>
    <div class="todo-input">
      <input
        autofocus="autofocus"
        autocomplete="off"
        placeholder="What needs to be done?"
        class="new-todo"
        v-model="todoInput"
        @keyup.enter="pushTodo()"
      />
    </div>
    <div class="todo-lists">
      <todo-item v-for="item in todoList"
      :data="item" :key="item.id"
      @onRemove="removeItem"></todo-item>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';
import TodoItem from '../components/TodoItem.vue';

export default {
  data() {
    return {
      todoInput: '',
      todoList: [
        {
          title: 'My no   first hfghfg tejkds kjsvnksjvndk skdjskdj',
          completed: true,
          id: 0,
        },
        {
          title: 'My no   vbfdbf gf fghfghfg tejkds kjsvnksjvndk skdjskdj',
          completed: false,
          id: 1,
        },
        {
          title: 'My Thired',
          completed: true,
          id: 2,
        },
      ],
    };
  },
  computed: {
    completedTodos() {
      return this.todoList.filter((i) => i.completed).length;
    },

  },
  methods: {
    removeItem(id) {
      const index = this.todoList.findIndex((i) => i.id === id);
      if (index > -1) {
        this.todoList.splice(index, 1);
      }
    },
    pushTodo() {
      if (!this.todoInput.trim()) {
        return;
      }
      this.todoList.unshift({
        title: this.todoInput,
        completed: false,
        id: Math.random(),
      });
      this.todoInput = '';
    },
  },
  components: {
    todoItem: TodoItem,
    RadialProgressBar,
  },
};
</script>

<style lang="scss">
.todo-view-container {
  .counter{
    position: relative;
    .part{
    position: absolute;
    top: -20px;
    left: -5px;
    font-size: 40px;
    }
    .top{
      position: absolute;
    top: -16px;
    left: -20px;
    }
    .bottom{
          position: absolute;
    bottom: -18px;
    right: -20px;
    }
  }
  .todo-input {
    margin: 5px 0;
  }
  .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
  .new-todo,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .todo-lists {
    display: flex;
    flex-flow: column;
    height: calc(100vh - 160px);
    overflow: auto;
  }
}
</style>
