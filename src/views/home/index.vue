<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-13 08:39:40
 * @LastEditors: 郑钊宇
 * @Description: 首页
-->

<template>
<div id="top">
   
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">CLASSIFIER</h3>
        <nav class="nav nav-masthead justify-content-center">
          <a class="nav-link active" href="#">主页</a>
          <a class="nav-link" href="#">登录</a>
          <a class="nav-link" href="#">注册</a>
        </nav>
      </div>
    </header>

    <main role="main" class="inner cover">
      <h1 class="cover-heading">铁路文献自动分类系统</h1>
      <p class="lead">
        <a href="#" class="btn btn-lg btn-secondary">登录后使用</a>
      </p>
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
    name: 'Home',
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
  #top {
    height: 100%;
    /* background-color: rgb(177, 156, 156); */
    background-image: linear-gradient(125deg,#F44336,#E91E63,#9C27B0,#3F51B5,#2196F3);
    background-size: 400%;
    animation: bganimation 20s infinite;
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

  #top {
    display: -ms-flexbox;
    display: flex;
    color: #fff;
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  }

  /* Links */
  a,
  a:focus,
  a:hover {
    color: #fff;
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
    padding: .25rem 0;
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

</style>
