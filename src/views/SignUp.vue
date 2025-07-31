<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleRegister">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" class="form-control" placeholder="name" autocomplete="username"
          required autofocus v-model="name">
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" class="form-control" placeholder="email" autocomplete="email"
          required v-model="email">
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" class="form-control" placeholder="Password"
          autocomplete="new-password" required v-model="password">
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input id="password-check" name="passwordCheck" type="password" class="form-control" placeholder="Password"
          autocomplete="new-password" required v-model="passwordCheck">
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
/* eslint-disable*/
import authorizationAPI from '@/apis/authorization'
import { Toast } from '@/utils/helpers'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    }
  },
  methods: {
    async handleRegister(e) {
      try {
        if (!this.name.trim()) {
          Toast.fire({
            icon: 'warning',
            title: '名字不能為空'
          })
          return
        } else if (!this.email) {
          Toast.fire({
            icon: 'warning',
            title: '信箱不能空'
          })
          return
        } else if (!this.password) {
          Toast.fire({
            icon: 'warning',
            title: '密碼不能為空'
          })
          return
        }

        if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '密碼與確認密碼不一致'
          })
          return
        }
        const { data } = await authorizationAPI.signup({name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck})

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push('/signin')
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '註冊失敗，請稍候再試'
        })
      }
    },
  },
}
</script>