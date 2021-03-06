<template>
  <div class="todo-view-container">
    <div class="todo-input">
      <input
        autofocus="autofocus"
        autocomplete="off"
        placeholder="What needs to be done?"
        class="new-todo"
        v-model="todoInput"
        @keyup.enter="pushTodo()"
      />
      <button class="add-btn" :class="{active:todoInput}" @click="pushTodo()">Add</button>
       <radial-progress-bar v-if="todoList.length > 0"
    :diameter="60"
    :startColor="'#38f28c'"
    :stopColor="'#2196f3'"
    :innerStrokeColor="'#ccc'"
    :completed-steps="completedTodos"
    :total-steps="todoList.length"
    class="progress">
    <div class="counter">
      <div class="top">{{ completedTodos }}</div>
      <div class="part">/</div>
      <div class="bottom">{{ todoList.length }}</div>
    </div>
    </radial-progress-bar>
    </div>
    <div class="todo-lists">
      <todo-item v-for="item in todoList"
      :data="item" :key="item.id"
      @onRemove="removeItem"></todo-item>
    </div>
    <div v-if="todoList.length === 0" class="empty-area">
      Start adding your todos
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import RadialProgressBar from 'vue-radial-progress';
import TodoItem from '../components/TodoItem.vue';
import { HTTP } from '../shared/http-common';

export default {
  data() {
    return {
      userId: null,
      todoInput: '',
      todoList: [],
    };
  },
  computed: {
    completedTodos() {
      return this.todoList.filter((i) => i.isCompleted).length;
    },

  },
  methods: {
    removeItem(id) {
      HTTP.put('todos/delete', {
        id,
      }).then((res) => {
        this.setSnack(res.data.message);
        const index = this.todoList.findIndex((i) => i.id === id);
        if (index > -1) {
          this.todoList.splice(index, 1);
        }
      });
    },
    pushTodo() {
      if (!this.todoInput.trim()) {
        return;
      }
      HTTP.post('todos/create', {
        message: this.todoInput,
        isCompleted: false,
        userId: this.userId,
      }).then((res) => {
        const resultData = res.data.data;
        this.todoList.unshift({
          message: resultData.message,
          isCompleted: false,
          id: resultData.id,
        });
      });

      this.todoInput = '';
    },
    ...mapMutations({
      setSnack: 'snackbar/setSnack',
    }),
  },
  components: {
    todoItem: TodoItem,
    RadialProgressBar,
  },
  created() {
    const userData = this.$store.state.userStore.user;
    this.userId = userData.id;
    HTTP.get(`todos?userId=${userData.id}`).then((res) => {
      this.todoList = res.data;
    });
  },
};
</script>

<style lang="scss">
.todo-view-container {
  .empty-area{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    color: #7b828b;
  }
  .counter{
    position: relative;
    .part{
    position: absolute;
    top: -11px;
    left: -3px;
    font-size: 22px;
    }
    .top{
    position: absolute;
    top: -7px;
    left: -12px;
    font-size: 10px;
    }
    .bottom{
    position: absolute;
    bottom: -9px;
    right: -12px;
    font-size: 9px;
    }
  }
  .todo-input {
    display: flex;
    margin: 12px 20% 18px;
    .add-btn{
    padding: 5px 12px;
    background: #70b7f6;
    color: #fff;
    border-radius: 10px;
    margin: 2px 11px;
    outline: none;
    &.active{
       background: #0086fd;
    }
    }
    .progress{
          position: fixed;
    left: 5px;
    top: 11px;
    }
  }
  .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    border-radius: 6px;
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
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  .todo-lists {
    display: flex;
    flex-flow: column;
    height: calc(100vh - 171px);
    overflow: auto;
  }
}
</style>
