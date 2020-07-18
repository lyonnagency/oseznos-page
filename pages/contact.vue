<template>
  <div class="contact">
    <SiteHeader></SiteHeader>
    <!-- <section
      class="torn-bg torn-bg-purple space-section-bottom space-section-top h-auto py-5"
    >
      <div
        class="content-torn container1 d-flex align-items-center flex-wrap py-4"
      >
        <h1 class="color-yellow ff-old-school-in-alt fs-87 torn-claw">
          Contacto
        </h1>
      </div>
    </section> -->
    <section
      class="torn-bg torn-bg-black space-section-bottom h-auto space-section-top"
    >
      <div class="py-4 w-100 overflow-hidden">
        <div class="container2 d-flex flex-wrap">
          <div
            class="col-12 col-sm-5 col-md-5 col-lg-5 d-flex align-items-center justify-content-center justify-content-start"
          >
            <h2 class="ff-old-school-in-alt color-yellow fs-60 torn-claw">
              ¡Únete al club!
            </h2>
          </div>
          <ContactForm
            class="col-12 col-sm-7 col-md-7 col-lg-6 d-flex align-items-center pr-0 px-0 py-5 my-4 py-sm-4 offset-lg-1">
          </ContactForm>
        </div>
      </div>
    </section>
    <section class="space-section-bottom">
      <div class="d-flex justify-content-center flex-wrap">
        <div class="col-12 col-sm-11 col-md-9 col-lg-6 px-0 d-flex justify-content-center flex-wrap">
          <h2 class="w-100 text-center">
            <span
              class="trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-3 line-overflow-purp line-overflow m-auto">
              Entra al campo de juego
            </span>
          </h2>
          <h2 class="ff-old-school-in-alt color-purple fs-60 w-100 text-center">
            ¡Conviértete en un Osezno!
          </h2>
          <div class="w-100 d-flex justify-content-center">
            <div class="number-bg-container">
              <div class="number-center number-bg">
                11
              </div>
            </div>
          </div>
          <p class="ff-museo-sans fs-sm-13 text-center mt-2">
            <strong>
              ¿Quieres inscribirte y formar parte del equipo de fútbol americano de Morelia?
            </strong>
            No esperes más, es muy fácil formar parte de la mejor escuela de fútbol americano de Morelia, ponte en
            contacto con nosotros, y si tienes dudas, las resolveremos inmediatamente. Aparta tu lugar y ven a la clase
            muestra sin compromiso. ¡Es para niños y niñas!
          </p>
        </div>
        <div class="col-lg-10 d-flex flex-wrap justify-content-between mt-5 pt-5">
          <div class="d-flex align-items-center col-12 col-sm-6 col-md-4 py-3 flex-wrap">
            <div class="col-4">
              <img
                class="contact-ico-contact"
                src="~assets/img/svg/contact-phone.svg"
                alt="Contacto por teléfono Oseznos de Morelia"
              />
            </div>
            <div class="col-8">
              <p class="ff-bebas fs-18 my-0">WhatsApp (443) 367 9536</p>
            </div>
          </div>
          <div
            class="d-flex align-items-center col-12 col-sm-6 col-md-4 py-3 flex-wrap"
          >
            <div class="col-4">
              <img
                class="contact-ico-contact"
                src="~assets/img/svg/contact-ubication.svg"
                alt="Ubicación de Oseznos de Morelia"
              />
            </div>
            <div class="col-8 ">
              <p class="ff-bebas fs-18 my-0">
                Nubes 880, Prados del campestre, Morelia, Mich., México
              </p>
            </div>
          </div>
          <div
            class="d-flex align-items-center col-12 col-sm-6 col-md-4 py-3 flex-wrap"
          >
            <div class="col-4">
              <img
                class="contact-ico-contact"
                src="~assets/img/svg/contact-mail.svg"
                alt="Correo electrónico Oseznos de Morelia"
              />
            </div>
            <div class="col-8 ">
              <p class="ff-bebas fs-18 my-0">hola@oseznos.com.mx</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="map-section torn-bg torn-bg-white">
      <div class="wrapper-map">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=nubes%2C%20880%2C%20morelia%2C%20m%C3%A9xico+(T%C3%ADtulo)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe
            >
            <a href="https://www.embedgooglemap.org">google embed map key</a>
          </div>
        </div>
      </div>
    </section>
    <SiteFooter class="space-section-top"></SiteFooter>
  </div>
</template>

<script>
  import SiteHeader from "~/components/layout/SiteHeader";
  import SiteFooter from "~/components/layout/SiteFooter";
  import ContactForm from '~/components/commons/ContactForm'

  export default {
    components: {
      SiteHeader,
      SiteFooter,
      ContactForm
    },
    transition: "component-fade",
    head() {
      return {
        title: "Ponte en contacto y entra al campo de juego",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "¡Demuestra la garra que llevas dentro! ponte en contacto para brindarte más información y forma parte de oseznos, el equipo de fútbol americano de Morelia."
          },
          {
            property: "og:description",
            content:
              "¡Demuestra la garra que llevas dentro! ponte en contacto para brindarte más información y forma parte de oseznos, el equipo de fútbol americano de Morelia.",
            vmid: "og:description"
          },
          {
            property: "og:url",
            content: "http://oseznos.com.mx/contact",
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
            content: "Oseznos de Morelia | Ponte en contacto y entra al campo de juego",
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
            content: "Oseznos de Morelia | Ponte en contacto y entra al campo de juego",
            vmid: "twitter:title"
          },
          {
            property: "twitter:description",
            content:
              "¡Demuestra la garra que llevas dentro! ponte en contacto para brindarte más información y forma parte de oseznos, el equipo de fútbol americano de Morelia.",
            vmid: "twitter:description"
          }
        ]
      };
    }
  };
</script>

<style>
  .mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: auto;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: auto;
  }
</style>
