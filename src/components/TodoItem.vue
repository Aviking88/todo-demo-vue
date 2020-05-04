<template>
  <div class="todo-item-wrapper">
    <div class="checkbox-area">
      <checkbox v-model="data.completed" ></checkbox>
    </div>
    <div class="todo-msg-area">
      <p @click="onClickOverMessage" class="msg">{{data.title}}</p>
      <div class="close" @click="onCloseClick">❌</div>
    </div>
  </div>
</template>

<script>
import Checkbox from './Checkbox.vue';

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          title: 'My no   vbfdbf gf fghfghfg tejkds kjsvnksjvndk skdjskdj',
          completed: true,
          id: null,
        };
      },
    },
  },
  methods: {
    onClickOverMessage() {
      this.data.completed = !this.data.completed;
    },
    onCloseClick() {
      this.$emit('onRemove', this.data.id);
      console.log('clicked');
    },
    onCheckChange(val) {
      console.log(val);
    },
  },
  components: {
    checkbox: Checkbox,
  },
};
</script>

<style scoped lang="scss">
.todo-item-wrapper{
  display: flex;
  align-items: center;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  text-align: start;
  cursor: pointer;
  .todo-msg-area{
    position: relative;
    align-self: flex-end;
    width: 100%;
    &:hover{
      .close{
        opacity: 1;
      }
    }
    .msg{
      padding-right: 30px;
      padding-left: 10px;
      text-align: left;
    }
    .close{
      position: absolute;
      right: 0;
      top: 5px;
      opacity: 0;
      font-size: 18px;
    }
  }
}

</style>
