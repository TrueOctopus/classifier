<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-27 10:28:43
 * @LastEditors: 郑钊宇
 * @Description: 注册表单组件
-->

<template>
<div class="card-body">
  <h2 class="card-title">注册</h2>
  <form method="POST" class="my-login-validation" novalidate="">
    <div class="form-group">
      <label for="username">用户名</label>
      <input id="username" type="text" class="form-control" name="username" required autofocus>
      <div class="invalid-feedback">
        你的用户名?
      </div>
    </div>

    <div class="form-group">
      <label for="email">邮箱地址</label>
      <input id="email" type="email" class="form-control" name="email" required>
      <div class="invalid-feedback">
        邮箱格式不正确！
      </div>
    </div>

    <div class="form-group">
      <label for="phone_num">电话号码</label>
      <input id="phone_num" type="text" class="form-control" name="phone_num" required>
      <div class="invalid-feedback">
        电话号码不能为空！
      </div>
    </div>

    <div class="form-group">
      <label for="password">密码</label>
      <input id="password" type="password" class="form-control" name="password" required data-eye>
      <div class="invalid-feedback">
        密码不能为空
      </div>
    </div>
    <br>

    <div class="form-group m-0">
      <button type="submit" class="btn btn-primary btn-block">
        注册
      </button>
    </div>
    <div class="mt-4 text-center">
      已经有账号了? <router-link to="/personal/login"><a style="color: #007bff;">登录</a></router-link>
    </div>
  </form>
</div>
</template>

<script>
  export default {
    name: 'Register',
    components: {},
    props: {},
    data() {
      return {
        
      }
    },
    methods: {
      
    }

  }
</script>

<style scoped>

</style>
