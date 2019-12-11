<template>
  <div id="app">
    <header>
      <a
        :href="urlHome"
        class="logo"
      >
        <img
          src="@/assets/logo.jpg"
          alt="logo"
        >
      </a>
      <div
        :class="[{ nav__mobile: menuClass.btnBurger }, menuClass.menuWrap]"
      >
        <button
          class="nav__burger"
          @click="activeMenu"
        />
        <div id="nav">
          <router-link
            class="nav__item"
            :to="urlSite.urlHome"
          >
            Home
          </router-link>
          <router-link
            class="nav__item"
            :to="urlSite.urlAbout"
          >
            About
          </router-link>
          <router-link
            class="nav__item"
            :to="urlSite.urlTest"
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
import urlSite from '@/constants';

export default {
  // components: { urlSite },
  data() {
    return {
      urlSite,
      menuClass: {
        menuWrap: 'menu__wrap',
        btnBurger: false,
      },
    };
  },
  methods: {
    activeMenu() {
      this.menuClass.btnBurger = !this.menuClass.btnBurger;
    },
  },
};
</script>
<style>
body, p, ul, li, h1, h2, h3, h4, ol, span, b, i {
    margin: 0;
    padding: 0;
  }
  /* Start: Header */
  header {
    display: flex;
    align-items: center;
    background-color: #002a32;
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
        display: none;
        width: 100%;
        margin-bottom: 10px;
    }
    .nav__mobile .nav__burger {
      background-color: red;
    }
    .nav__mobile .nav__item {
      display: inline-block;
    }
  }
</style>
