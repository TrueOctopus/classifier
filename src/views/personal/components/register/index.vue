<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-30 10:00:38
 * @LastEditors: 郑钊宇
 * @Description: 注册表单组件
-->

<template>
<div class="card-body">
  <h2 class="card-title">注册</h2>
  <form class="my-login-validation" novalidate="">
    <div class="form-group">
      <label for="username">用户名</label>
      <input id="username" v-model="register.username" type="text" class="form-control" required autofocus>
      <div class="invalid-feedback">
        你的用户名?
      </div>
    </div>

    <div class="form-group">
      <label for="email">邮箱地址</label>
      <input id="email" v-model="register.email" type="email" class="form-control" required>
      <div class="invalid-feedback">
        邮箱格式不正确！
      </div>
    </div>

    <div class="form-group">
      <label for="phone_num">电话号码</label>
      <input id="phone_num" v-model="register.phone_num" type="text" class="form-control" required>
      <div class="invalid-feedback">
        电话号码不能为空！
      </div>
    </div>

    <div class="form-group">
      <label for="password">密码</label>
      <input id="password" v-model="register.password" type="password" class="form-control" required data-eye>
      <div class="invalid-feedback">
        密码不能为空
      </div>
    </div>
    <br>

    <div class="form-group m-0">
      <button type="submit" class="btn btn-primary btn-block" @click="registerFun">
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
  import $ from 'jquery'
  export default {
    name: 'Register',
    components: {},
    props: {},
    data() {
      return {
        register: {
          email: 'test@test.com',
          username: 'test',
          phone_num: '12345678901',
          password: '123456'
        },
        message: ''
      }
    },
    methods: {
      registerFun() {
        this.$axios.post("users/register", this.register)
        .then(res => {
          console.log(res.data);
          if(res.data.code == 1) {
            alert(res.data.message);
            this.$router.push('/personal/login');
          }
          else {
            console.log(res.data.message);
            this.message = res.data.message;
            alert(res.data.message);
            this.$router.push('/personal/register');
          }
        })
        .catch(err => {
          alert("注册失败");
          console.log(err);
        })
      },
    },
    mounted() {
      $("#register").addClass("active")
      $("#login").removeClass("active")
      $("input[type='password'][data-eye]").each(function(i) {
        var $this = $(this),
          id = 'eye-password-' + i;
          // el = $('#' + id);

        $this.wrap($("<div/>", {
          style: "position:relative",
          id: id
        }));

        $this.css({
          paddingRight: 60
        });
        $this.after($("<div/>", {
          html: '显示',
          class: 'btn btn-primary btn-sm',
          id: 'passeye-toggle-'+i,
        }).css({
            position: 'absolute',
            right: 10,
            top: ($this.outerHeight() / 2) - 12,
            padding: '2px 7px',
            fontSize: 12,
            cursor: 'pointer',
            color: '#fff',
            width: '10%',
        }));

        $this.after($("<input/>", {
          type: 'hidden',
          id: 'passeye-' + i
        }));

        var invalid_feedback = $this.parent().parent().find('.invalid-feedback');

        if(invalid_feedback.length) {
          $this.after(invalid_feedback.clone());
        }

        $this.on("keyup paste", function() {
          $("#passeye-"+i).val($(this).val());
        });
        $("#passeye-toggle-"+i).on("click", function() {
          if($this.hasClass("show")) {
            $this.attr('type', 'password');
            $this.removeClass("show");
            $(this).removeClass("btn-outline-primary");
          }else{
            $this.attr('type', 'text');
            $this.val($("#passeye-"+i).val());				
            $this.addClass("show");
            $(this).addClass("btn-outline-primary");
          }
        });
      });

      $(".my-login-validation").submit(function() {
        var form = $(this);
            if (form[0].checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
        form.addClass('was-validated');
      });
    }
    

  }
</script>

<style scoped>

</style>
