<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-27 10:28:18
 * @LastEditors: 郑钊宇
 * @Description: 登录页面
-->

<template>

<div class="card-body">
  <h2 class="card-title">登录</h2>
  <form method="POST" class="my-login-validation" novalidate="">
    <div class="form-group">
      <label for="email">邮箱地址</label>
      <input id="email" type="email" class="form-control" name="email" value="" required autofocus>
      <div class="invalid-feedback">
        邮箱是无效的
      </div>
    </div>

    <div class="form-group">
      <label for="password">密码</label>
      <input id="password" type="password" class="form-control" name="password" required data-eye>
        <div class="invalid-feedback">
          密码不能为空
        </div>
    </div>

    <div class="form-group">
      <div class="custom-checkbox custom-control">
        <input type="checkbox" name="remember" id="remember" class="custom-control-input">
        <label for="remember" class="custom-control-label" >记住我</label>
      </div>
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block">
        登录
      </button>
    </div>
    <div class="mt-4 text-center">
      没有账户? <router-link to="/personal/register"><a style="color: #007bff;">新建一个账户</a></router-link>
    </div>
  </form>
</div>
</template>

<script>
  export default {
    name: 'Login',
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
