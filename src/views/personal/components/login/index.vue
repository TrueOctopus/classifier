<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-31 12:05:58
 * @LastEditors: 郑钊宇
 * @Description: 登录页面
-->

<template>

<div class="card-body">
  <h2 class="card-title">登录</h2>
  <form class="my-login-validation" novalidate="">
    <div class="form-group">
      <label for="email">邮箱地址</label>
      <input id="email" v-model="login.email" type="email" class="form-control" required autofocus>
      <div class="invalid-feedback">
        邮箱是无效的
      </div>
    </div>

    <div class="form-group">
      <label for="password">密码</label>
      <input id="password" v-model="login.password" type="password" class="form-control" required data-eye>
        <div class="invalid-feedback">
          密码不能为空
        </div>
    </div>

    <br/>

    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block" @click="loginFun">
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
  import $ from 'jquery'
  export default {
    name: 'Login',
    components: {},
    props: {},
    data() {
      return {
        login: {
          email: '18368876370@163.com',
          password: '123456',
          remember: '',
        },
        message: ''
        
      }
    },
    methods: {
      loginFun() {
        this.$axios.post("users/login", this.login)
        .then(res => {
          console.log(res.data);
          if(res.data.code == 1) {
            localStorage.setItem('userData', JSON.stringify(res.data));
            alert(res.data.message);
            this.$router.push('/');
          }
          else {
            console.log(res.data.message);
            this.message = res.data.message;
            alert(res.data.message);
            this.$router.push('/personal/login');
          }
        })
        .catch(err => {
          console.log(err);
        })
      },
    },
    mounted() {
      $("#login").addClass("active")
      $("#register").removeClass("active")
      $("#info").removeClass("active")
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
    },
  }
</script>

<style scoped>

</style>
