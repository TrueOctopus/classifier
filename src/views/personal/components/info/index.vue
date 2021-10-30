<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-30 17:35:22
 * @LastEditors: 郑钊宇
 * @Description: 信息组件
-->

<template>
<div class="card-body">
  <h2 class="card-title">个人信息</h2>
  <form class="my-login-validation" novalidate="">
    <div class="form-group">
      <label for="username">用户名</label>
      <input id="username" v-model="personal.username" type="text" class="form-control" required disabled>
      <div class="invalid-feedback">
        用户名不能为空
      </div>
    </div>

    <div class="form-group">
      <label for="email">邮箱</label>
      <input id="email" v-model="personal.email" type="text" class="form-control" required disabled>
    </div>

    <div style="margin: 0.75rem 0 0.08rem">
    <label for="sex" style="margin-right: 1rem;">性别</label>
      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="personal.sex" type="radio" id="exampleRadios1" value="1" disabled>
        <label class="form-check-label" for="exampleRadios1">
          男
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="personal.sex" type="radio" id="exampleRadios2" value="0" disabled>
        <label class="form-check-label" for="exampleRadios2">
          女
        </label>
      </div>
    </div>

    <div class="form-group">
      <label for="phone_num">电话号码</label>
      <input id="phone_num" v-model="personal.phone_num" type="text" class="form-control" disabled>
    </div>

    <div class="form-group">
      <label for="unit">单位</label>
      <input id="unit" v-model="personal.unit" type="text" class="form-control" disabled>
    </div>

    <div class="form-group">
      <label for="address">地址</label>
      <input id="address" v-model="personal.address" type="text" class="form-control" disabled>
    </div>
    <br>

    <div class="form-group m-0">
      <router-link to="/personal/edit">
        <button class="btn btn-primary btn-block" >
          修改个人信息
        </button>
      </router-link>
    </div>

  </form>
</div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'Info',
    components: {},
    props: {},
    data() {
      return {
        personal: {
          id: '',
          username: '',
          email: '',
          sex: '',
          phone_num: '',
          address: '',
          unit: ''
        },
        message: ''
      }
    },
    methods: {
      getUserId() {
        return JSON.parse(localStorage.getItem('userData')).id
      },
      initData() {
        var userData = JSON.parse(localStorage.getItem('userData'));
        if(userData) {
          this.personal = userData;
          // console.log("initData");
        }
        else {
          this.$router.push('/');
        }
      },
      getUserInfo() {
        var id = this.getUserId()
        this.$axios.get("/gets/getById/" + id).then(res => {
          localStorage.setItem('userData', JSON.stringify(res.data));
          // console.log("getUserInfo");
          this.initData()
        })
      },
    },
    created() {
      this.getUserInfo()
      $("#login").removeClass("active")
      $("#register").removeClass("active")
      $("#info").addClass("active")
    },
    mounted() {
      
    }

  }
</script>

<style>

</style>
