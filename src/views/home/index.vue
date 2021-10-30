<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-30 14:53:21
 * @LastEditors: 郑钊宇
 * @Description: 首页
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
          <router-link class="nav-link active" to="/">
            主页
          </router-link>
          <router-link class="nav-link" v-if="!isLogin" :to="{path:'/personal/login'}">
            登录
          </router-link>
          <router-link class="nav-link" v-if="!isLogin" :to="{path:'/personal/register'}">
            注册
          </router-link>
          <router-link id="info" class="nav-link" v-if="isLogin" :to="{path:'/personal/info'}">
            {{this.username}}
          </router-link>
        </nav>
      </div>
    </header>

    <main role="main" class="inner cover" id="main">
      <h1 class="cover-heading">铁路文献自动标引分类系统</h1>
      <p class="lead">
        <router-link to="/personal/login" >
          <a v-if="!isLogin" class="btn btn-lg btn-secondary">登录后使用</a>
        </router-link>
        <router-link to="/classifier">
          <a v-if="isLogin" class="btn btn-lg btn-secondary">进入分类系统</a>
        </router-link>
      </p>
    </main>

    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>Copyright © 2021.真·章鱼 Powered by Bootstrap</p>
      </div>
    </footer>
  </div>

</div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    props: {},
    data() {
      return {
        isLogin: false,
        username: ''
      }
    },
    methods: {
      
    },
    mounted() {
      var userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
        this.isLogin = true;
        this.username = userData.username;
      }
      else {
        this.isLogin = false;
      }
    }

  }
</script>

<style>
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
