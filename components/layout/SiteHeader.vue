<template>
  <div
    v-scroll="handleScroll"
    ref="menuHeaderRef"
    class="d-relative menu-wrapper"
  >
    <b-navbar toggleable="lg" type="dark" class="menu-header px-0 container1">
      <b-navbar-toggle
        target="nav-collapse"
        @click="menuClick"
        ref="nav-collapse">
        <menuIicon >
        </menuIicon>
      </b-navbar-toggle>
      <nuxt-link to="/" class="text-item brand-icon">
        <img
          width="80"
          src="~assets/img/svg/header-logo.svg"
          alt="Oseznos logo header"
          class="d-lg-none"
        />
      </nuxt-link>
      <!-- SECTION SHOWED WHEN THE SCREEN IS SMALL, MEDIUM -->
      <b-navbar-nav
        class="align-items-center d-none d-sm-flex d-lg-none flex-row"
      >
        <b-nav-item to="contact" class="hover-center-underline fs-sm-13 mx-2 mx-sm-2">
          Habla con nosotros
        </b-nav-item>
        <b-nav-item
          class="trapeze trapeze-purple line-overflow line-overflow-yellow px-sm-4 py-sm-2 fs-sm-13 mx-sm-3 px-md-5 px-lg-0"
          to="login">
          Log In
        </b-nav-item>
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav class="">
        <div class="d-flex w-100 flex-wrap  mt-4 mt-lg-0">
          <b-navbar-nav
            class="social-icons col-12 col-md-3 align-items-center d-none d-lg-flex px-2"
          >
            <b-nav-item href="https://www.facebook.com/oseznosmorelia/" target="_blank">
              <img
                src="~assets/img/svg/facebook.svg"
                alt="Facebook Oseznos de Morelia"
              />
            </b-nav-item>
            <b-nav-item href="https://www.instagram.com/oseznosmorelia/" target="_blank">
              <img
                src="~assets/img/svg/instagram.svg"
                alt="Instagram Oseznos de Morelia"
              />
            </b-nav-item>
            <b-nav-item target="_blank" href="https://wa.me/5214433679536?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Club%20Oseznos">
              <img src="~assets/img/svg/wap.svg" alt="Whatsapp Oseznos de Morelia" />
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav
            class="col-12 col-lg-6 justify-content-center align-items-center px-2"
          >
            <b-nav-item to="/" class="hover-center-underline">
              Inicio
            </b-nav-item>
            <b-nav-item to="galeria" class="hover-center-underline">
              Galería
            </b-nav-item>
            <b-nav-item to="/" class="d-none d-lg-block">
              <img
                src="~assets/img/svg/header-logo.svg"
                alt="Oseznos logo header"
                class="oseznos-menu"
              />
            </b-nav-item>
            <b-nav-item to="el-club" class="hover-center-underline">
              El equipo
            </b-nav-item>
            <b-nav-item to="la-escuela" class="hover-center-underline">
              La escuela
            </b-nav-item>

          </b-navbar-nav>
          <b-navbar-nav class="d-flex align-items-center col-12 col-lg-3">
            <!-- <b-nav-item to="contact" class="hover-center-underline">
              Contacto
            </b-nav-item> -->
            <b-nav-item to="contact" class="hover-center-underline">
              Habla con nosotros
            </b-nav-item>
            <b-nav-item
              class="fs-login-on-menu trapeze trapeze-purple line-overflow line-overflow-yellow py-sm-2 px-sm-5 px-lg-2 px-xl-3"
              to="login"
            >
              Log In
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav
            class="social-icons col-12 col-lg-2 align-items-center d-flex d-lg-none mt-4 flex-row justify-content-center px-2"
          >
            <b-nav-item href="https://www.facebook.com/oseznosmorelia/" target="_blank">
              <img
                src="~assets/img/svg/facebook.svg"
                alt="Facebook Oseznos de Morelia"
              />
            </b-nav-item>
            <b-nav-item href="https://www.instagram.com/oseznosmorelia/" target="_blank">
              <img
                src="~assets/img/svg/instagram.svg"
                alt="Instagram Oseznos de Morelia"
              />
            </b-nav-item>
            <b-nav-item target="_blank" href="https://wa.me/5214433679536?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Club%20Oseznos">
              <img src="~assets/img/svg/wap.svg" alt="Whatsapp Oseznos de Morelia" />
            </b-nav-item>
          </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Vue from "vue";
import menuIicon from "~/components/icons/menu";
Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});
export default {
  name: "SiteHeader",
  components:{
    menuIicon
  },
  data() {
    return {
      hederHeight: 10, // this data is setted manually
      headerElement: null
    };
  },
  mounted() {
    // this.hederHeight = this.$refs.menuHeaderRef;
    this.headerElement = this.$refs.menuHeaderRef;
  },
  methods: {
    // TODO
    // Add an remove the active class using the state of the button navbar-toggle from bootstrap
    menuClick() {
      if (this.headerElement.classList.contains("active-menu")) {
        setTimeout(() => {
          this.headerElement.classList.remove("active-menu");
        }, 300);
      } else {
        setTimeout(() => {
          this.headerElement.classList.add("active-menu");
        }, 100);
      }
    },
    handleScroll(evt, el) {
      if (
        window.scrollY > this.hederHeight &&
        !this.headerElement.classList.contains("fixed-menu")
      ) {
        this.headerElement.classList.add("fixed-menu");
      } else if (
        window.scrollY < this.hederHeight &&
        this.headerElement.classList.contains("fixed-menu")
      ) {
        this.headerElement.classList.remove("fixed-menu");
      }
    }
  }
};
</script>

<style></style>
