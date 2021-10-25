<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-25 13:41:50
 * @LastEditors: 郑钊宇
 * @Description: 登录页面
-->

<template>
<div id="top">
   
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
      <div class="inner">
        <router-link to="/">
          <h3 class="masthead-brand">CLASSIFIER</h3>
        </router-link>
        <nav class="nav nav-masthead justify-content-center">
          <router-link to="/">
            <a class="nav-link">主页</a>
          </router-link>
          <router-link to="/login">
            <a class="nav-link active">登录</a>
          </router-link>
          <router-link to="/register">
            <a class="nav-link">注册</a>
          </router-link>
        </nav>
      </div>
    </header>

    <main role="main" class="inner cover my-login-page" id="main">
      <section class="h-100">
      <div class="container h-100">
        <div class="row justify-content-md-center h-100">
          <div class="card-wrapper">
            <div class="card fat">
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
                    <label for="password">密码&nbsp;
                      <a href="forgot.html" style="color: #007bff;">
                        忘记了密码?
                      </a>
                    </label>
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
                    没有账户? <a href="register.html" style="color: #007bff;">新建一个账户</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>

    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>Copyright © 2021.真·章鱼</p>
        <p>Powered by Bootstrap</p>
      </div>
    </footer>
  </div>

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

<style>
  @import '../../assets/css/login.css';
  #top {
    flex: 1;
    height: 100%;
    display: -ms-flexbox;
    background-image: linear-gradient(125deg,#f15448,#e91e62ee,#9C27B0,#3F51B5,#2196F3);
    background-size: 400%;
    animation: bganimation 20s infinite;
    color: #fff;
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  }
  @keyframes bganimation{
    0%{
      background-position: 0% 50%;
    }

    50%{
      background-position: 100% 50%;
    }

    100%{
      background-position: 0% 50%;
    }

  }
  /* Links */
  a,
  a:focus,
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  /* Custom default button */
  .btn-secondary,
  .btn-secondary:hover,
  .btn-secondary:focus {
    color: #333;
    text-shadow: none; /* Prevent inheritance from `body` */
    background-color: #fff;
    border: .05rem solid #fff;
  }

  .cover-container {
    max-width: 70rem;
  }

  /*
  * Header
  */
  .masthead {
    margin-bottom: 2rem;
  }

  .masthead-brand {
    margin-bottom: 0;
  }

  .nav-masthead .nav-link {
    padding: .25rem .25rem;
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
    background-color: transparent;
    border-bottom: .25rem solid transparent;
  }

  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
  }

  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }

  .nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
  }

  @media (min-width: 48em) {
    .masthead-brand {
      float: left;
    }
    .nav-masthead {
      float: right;
    }
  }


  /*
  * Cover
  */
  .cover {
    padding: 0 1.5rem;
  }
  .cover h1 {
    letter-spacing: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .cover .btn-lg {
    padding: .75rem 1.25rem;
    font-weight: 700;
  }


  /*
  * Footer
  */
  .mastfoot {
    color: rgba(255, 255, 255, 0.822);
  }
  /* 
  * css3 fade-in
  */
  @keyframes fade-in {  
    0% {opacity: 0;}
    40% {opacity: 0;}
    100% {opacity: 1;} 
    from {bottom: -5rem;}
    to {bottom: 0rem;}
  }  
 
  #main {
    position: relative; 
    animation: fade-in 1.5s;  
  }

</style>
