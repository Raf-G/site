<template>
  <div id="app">
    <header>
      <a href="/" class="logo"><img src="@/assets/logo.jpg" alt="logo"></a>
      <div
        class="menu__wrap"
        :class="{ nav__mobile: btnBurger }"
      >
        <button
          class="nav__burger"
          @click="myFunction"
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
    </header>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnBurger: false,
    };
  },
  methods: {
    myFunction() {
      this.btnBurger = !this.btnBurger;
    },
  },
};
</script>
<style>
body, p, ul, li, h1,h2,h3,h4,ol,span,b,i {
    margin: 0;
    padding: 0;
  }
  /* Start: Header */
  header {
    background-color: #002a32;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
  }
  .logo img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  /* Start: Menu */
  .menu__wrap {
    display: inline-block;
    text-align: center;
  }
  .nav__item {
    font-size: 35px;
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    margin: 0 10px;
    border-radius: 5px;
    transition: 0.3s;
  }
  .nav__item:hover {
    box-shadow: #002a32;
    -webkit-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.75);
    transition: 0.3s;
  }
  .nav__burger {
    display: none;
  }
  /* End: Menu */
  /* End: Header */
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
    .nav__mobile .nav__burger {
      background-color: red;
    }
    .nav__mobile .nav__item {
      display: inline-block;
    }
  }
</style>
