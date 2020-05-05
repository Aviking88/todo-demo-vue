<template>
  <div class="login-container">
      <h1 v-if="isLogin">Login 👤</h1>
      <h1 v-else>Register 👤</h1>
      <div class="form-control">
        <input name="email" placeholder="Email" v-model="email" />
      </div>
      <div class="form-control">
        <input name="password"
        type="password" placeholder="Password" v-model="password" />
      </div>
      <div v-if="!isLogin" class="form-control">
        <input name="confirm-password"
        type="password" placeholder="Confirm Password" v-model="cnfPassword" />
      </div>

      <button type="submit"
      @click="loginSignUpHandler">{{ isLogin ? 'Log in 🔒' : 'Register 👤' }} </button>
      <div class="navigation-link"
       @click="isLogin = !isLogin"
       >{{ isLogin ? 'Create new account.' : 'Use existing account.' }}
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { HTTP } from '../shared/http-common';
import { LOCAL_STORAGE_USER_DATA } from '../shared/constant';


export default {
  data() {
    return {
      email: '',
      password: '',
      cnfPassword: '',
      isLogin: true,
    };
  },
  methods: {
    loginSignUpHandler() {
      if (this.isLogin) {
        HTTP.post('user/login', {
          email: this.email,
          password: this.password,
        }).then((res) => {
          const resData = res.data;
          this.setSnack(resData.message);
          localStorage.setItem(LOCAL_STORAGE_USER_DATA, JSON.stringify(resData.data));
          this.setUser(resData.data);
          this.$router.push('Home');
        }).catch((res) => {
          const resData = res.response;
          if (resData.status === 401) {
            this.setSnack('invalid email or password');
          }
        });
        return;
      }
      if (!this.isLogin) {
        if (this.password !== this.cnfPassword) {
          this.setSnack('password in both fields are not same');
          return;
        }
        HTTP.post('user/create', {
          email: this.email,
          password: this.password,
        }).then((res) => {
          const resData = res.data;
          this.setSnack(resData.message);
          localStorage.setItem(LOCAL_STORAGE_USER_DATA, JSON.stringify({ id: resData.data.id }));
          this.setUser(res.data.data);
          setTimeout(() => {
            this.$router.push('Home');
          }, 100);
        }).catch((res) => {
          const resData = res.response;
          this.setSnack(resData.data.message);
        });
        return;
      }
      this.setSnack('Please fill all the required fields');
    },
    ...mapMutations({
      setSnack: 'snackbar/setSnack',
      setUser: 'userData/setuser',
    }),
  },
  created() {
    const userData = this.$store.state.userStore.user;
    if (userData && userData.id) {
      this.$router.push('Home');
    }
  },
};
</script>

<style scoped>
.login-container {
  background: #fff;
  padding: 50px;
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 20px 14px 8px rgba(0, 0, 0, 0.58);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-control input {
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  transition: all 300ms ease-in-out;
  width: 100%;
}
.form-control input:focus {
  outline: 0;
  border-bottom: 1px solid #666;
}
button {
  margin-top: 20px;
  background: #0086fd;
  color: white;
  padding: 10px 0;
  width: 200px;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
button:hover {
  transform: translateY(-2.5px);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.58);
}
h1 {
  margin: 10px 20px 30px 20px;
  font-size: 40px;
}
.navigation-link{
    display: block;
    margin-top: 30px;
    cursor: pointer;
    color: #0086fd;
}
</style>
