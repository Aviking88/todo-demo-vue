<template>
  <div class="todo-item-wrapper">
    <div class="checkbox-area">
      <checkbox v-model="data.isCompleted" ></checkbox>
    </div>
    <div class="todo-msg-area">
      <p @click="onClickOverMessage" :class="{
        msg: true,
        completed:data.isCompleted
      }">{{data.message}}</p>
      <div class="close" @click="onCloseClick">❌</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { HTTP } from '../shared/http-common';
import Checkbox from './Checkbox.vue';

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          message: 'My no   vbfdbf gf fghfghfg tejkds kjsvnksjvndk skdjskdj',
          isCompleted: true,
          id: null,
        };
      },
    },
  },
  methods: {
    onClickOverMessage() {
      HTTP.post('todos/update', {
        message: this.data.message,
        isCompleted: !this.data.isCompleted,
        id: this.data.id,
      }).then((res) => {
        this.data.isCompleted = !this.data.isCompleted;
        const resultData = res.data;
        this.setSnack(resultData.message);
      });
    },
    onCloseClick() {
      this.$emit('onRemove', this.data.id);
    },
    ...mapMutations({
      setSnack: 'snackbar/setSnack',
    }),
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
  padding: 18px;
  background: #fff;
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
    .completed {
          text-decoration: line-through;
          opacity: .6;
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
