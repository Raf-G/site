<template>
  <div id="app">
    <div class="menu__wrap">
      <button
        onclick="myFunction()"
        class="nav__burger"
      />
      <div id="nav">
        <router-link
          class="nav__item"
          to="/"
        >
          Home
        </router-link>
        <router-link
          class="nav__item"
          to="/about"
        >
          About
        </router-link>
        <router-link
          class="nav__item"
          to="/test"
        >
          test
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
  },
  methods: {
    myFunction() {
      const element = document.getElementById('myDIV');
      element.classList.toggle('mystyle');
    },
  },
};
</script>
<style>
body, p, ul, li, h1,h2,h3,h4,ol,span,b,i {
    margin: 0;
    padding: 0;
  }
  /* Start: Menu */
  .menu__wrap {
    width: 100%;
    margin: 40px auto;
    text-align: center;
  }
  .nav__item {
    background-color: rgb(106, 49, 240);
    font-size: 35px;
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    margin: 0 10px;
  }
  .nav__burger {
    display: none;
  }
  /* End: Menu */
  @media (max-width: 768px) {
    .nav__burger {
      display: block;
      width: 30px;
      height: 30px;
      background-color: green;
      cursor: pointer;
    }
    .nav__item {
        width: 100%;
        margin-bottom: 10px;
        display: none;
    }
    .mystyle {
      width: 100%;
      padding: 25px;
      background-color: coral;
      color: white;
      font-size: 25px;
    }
  }
</style>
