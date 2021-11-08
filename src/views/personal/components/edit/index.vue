<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-11-01 14:16:42
 * @LastEditors: 郑钊宇
 * @Description: 信息修改组件
-->

<template>
<div class="card-body">
  <h2 class="card-title">修改个人信息</h2>
  <form class="my-login-validation" novalidate="">
    <div class="form-group">
      <label for="username">用户名</label>
      <input id="username" v-model="personal.username" type="text" class="form-control" required autofocus>
      <div class="invalid-feedback">
        用户名不能为空
      </div>
    </div>

    <div>
      <label for="sex">性别</label>
    </div>    
    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model="personal.sex" type="radio" id="exampleRadios1" value="1" checked>
      <label class="form-check-label" for="exampleRadios1">
        男
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model="personal.sex" type="radio" id="exampleRadios2" value="0">
      <label class="form-check-label" for="exampleRadios2">
        女
      </label>
    </div>

    <div class="form-group">
      <label for="phone_num">电话号码</label>
      <input id="phone_num" v-model="personal.phone_num" type="text" class="form-control" required>
      <div class="invalid-feedback">
        电话号码不能为空！
      </div>
    </div>

    <div class="form-group">
      <label for="unit">单位</label>
      <input id="unit" v-model="personal.unit" type="text" class="form-control" required>
      <div class="invalid-feedback">
        不能为空
      </div>
    </div>

    <div class="form-group">
      <label for="address">地址</label>
      <input id="address" v-model="personal.address" type="text" class="form-control" required>
      <div class="invalid-feedback">
        不能为空
      </div>
    </div>
    <br>

    <div class="form-group m-0">
      <button type="submit" class="btn btn-primary btn-block" @click="changePersonalFun">
        提交
      </button>
    </div>

  </form>
</div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'Edit',
    components: {},
    props: {},
    data() {
      return {
        personal: {
          id: '',
          username: '',
          sex: '',
          phone_num: '',
          address: '',
          unit: ''
        },
        message: ''
      }
    },
    methods: {
      changePersonalFun() {
        this.$axios.post("/users/update", this.personal)
        .then(res => {
          console.log(res.data);
          if(res.data.code == 1) {
            this.$axios.get("/gets/getById/"+this.personal.id).then(res => {
              localStorage.setItem('userData', JSON.stringify(res.data));
            })
            alert(res.data.message);
            this.$router.push('/personal/info');
          }
          else {
            console.log(res.data.message);
            this.message = res.data.message;
            alert(res.data.message);
            this.$router.push('/personal/edit');
          }
        })
        .catch(err => {
          alert("注册失败");
          console.log(err);
        })
      },
    },
    created() {
      var userData = JSON.parse(localStorage.getItem('userData'));
      if(userData) {
        this.personal= userData;
      }
      else {
        this.$router.push('/');
      }
      $("#login").removeClass("active")
      $("#register").removeClass("active")
      $("#info").addClass("active")
    
    },
    mounted() {
      
    }

  }
</script>

<style scoped>

</style>
