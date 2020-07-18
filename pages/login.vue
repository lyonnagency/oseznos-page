<template>
  <div class="login-page">
    <SiteHeader></SiteHeader>
    <iframe src="http://174.142.199.229/OSEZNOS_P/  " height="100%" width="100%"></iframe>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
  import SiteHeader from "~/components/layout/SiteHeader";
  import SiteFooter from "~/components/layout/SiteFooter";

  export default {
    name: "login",
    components: {
      SiteHeader,
      SiteFooter
    },
    head() {
      return {
        title: "Inicio de sesión",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Inicia sesión aquí al sistema de gestión de oseznos de Morelia, la mejor escuela de futbol americano infantil y juvenil, para niños y niñas."
          },
          {
            property: "og:description",
            content:
              "Inicia sesión aquí al sistema de gestión de oseznos de Morelia, la mejor escuela de futbol americano infantil y juvenil, para niños y niñas.",
            vmid: "og:description"
          },
          {
            property: "og:url",
            content: "http://oseznos.com.mx/la-escuela",
            vmid: "og:url"
          },
          {
            property: "og:image",
            content: "http://oseznos.com.mx/oseznos-logo-meta.jpg",
            // content: this.socialImg,
            vmid: "og:image"
          },
          {
            property: "og:title",
            content: "Oseznos de Morelia | Inicio de sesión",
            vmid: "og:title"
          },
          {
            property: "og:type",
            content: "website",
            vmid: "og:type"
          },
          {
            property: "og:site_name",
            content: "Oseznos de Morelia",
            vmid: "og:title"
          },
          {
            property: "twitter:card",
            content: "summary_large_image",
            vmid: "twitter:card"
          },
          {
            property: "twitter:image",
            content: "http://oseznos.com.mx/oseznos-logo-meta.jpg",
            // content: this.socialImg,
            vmid: "twitter:image"
          },
          {
            property: "twitter:title",
            content: "Oseznos de Morelia | Inicio de sesión",
            vmid: "twitter:title"
          },
          {
            property: "twitter:description",
            content:
              "Inicia sesión aquí al sistema de gestión de oseznos de Morelia, la mejor escuela de futbol americano infantil y juvenil, para niños y niñas.",
            vmid: "twitter:description"
          }
        ]
      };
    }
  }
</script>

<style scoped>

</style>
