<template>
  <div class="landing-page overflow-hidden">
    <!--    MENU    -->
    <div class="menu-landing-page w-100 pt-5">
      <div class="d-flex justify-content-end align-items-center w-100 menu-container">
        <nuxt-link to="/" class="text-item brand-icon-landing">
          <img
            src="~assets/img/svg/header-logo.svg"
            alt="Oseznos logo header"
            class="oseznos-menu-brand"
          />
        </nuxt-link>
        <b-navbar-nav
          class="social-icons col-4 col-sm-3 col-lg-1 align-items-center flex-row d-flex px-2 justify-content-center">
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
        </b-navbar-nav>
      </div>
    </div>

    <!--  HERO IMAGE  -->
    <section class="hero hero-landing d-flex align-items-center">
      <div class="d-flex w-100 container1 flex-wrap flex-sm-nowrap">
        <div class="player-kid col-lg-4 col-6 col-sm-4"></div>
        <div class="col-12 col-sm-7 col-lg-6 px-0">
          <div class="col-12 px-0">
            <h1
              class="trapeze trapeze-purple trapeze-purple-darker ff-bebas fs-22 py-lg-2 py-1 my-1 my-md-0 px-4 px-lg-5 mb-lg-3">
              únete a oseznos
            </h1>
          </div>
          <div class="col-12 px-0">
            <h2 class="ff-old-school-in-alt font-italic color-purple my-lg-1 my-0 ">
              <div class="d-block main-text-hero">
                <span class="trapeze trapeze-yellow px-4 px-md-4 px-lg-0 my-1 py-0 w-fit-content fs-66">
                  ¡El mejor equipo de
                </span>
                <span class="trapeze trapeze-yellow px-4 my-1 py-0 fs-66">
                    <span class="w-100">Fútbol Americano </span>
                </span>
                <span class="trapeze trapeze-yellow px-4 my-1 py-0 fs-66">
                    <span class="w-100">y tochito de Morelia </span>
                </span>
              </div>
            </h2>
          </div>
        </div>
        <div
          class="col-8 col-sm-5 px-md-3 col-lg-5 mt-4 offset-sm-1 d-flex align-items-center justify-content-end px-0">
          <div class="d-flex flex-wrap">
            <h2 class="ff-old-school-in-alt fs-46 color-purple">
              ¡ Aparta tu lugar y ven a la clase muestra !
            </h2>
            <div class="w-100">
              <nuxt-link to="/registro"
                         class="trapeze trapeze-purple trapeze-purple-darker ff-bebas fs-22 line-overflow line-overflow-yellow line-overflow-left px-lg-5 px-4 py-3 py-lg-4 my-1 my-md-2">
                <span class="px-3"> ¡ Únete al club !</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="torn-bg torn-bg-purple space-section-bottom z-index-10">
      <div class="w-100">
        <div
          class="content-torn container1 d-flex flex-wrap align-items-center justify-content-center"
        >
          <div class="col-12 py-2">
            <h2 class="color-yellow ff-old-school-regular fs-24 mb-3 my-md-0 text-center">
              Para niños y niñas entre 5 y 17 años
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section class="space-section-bottom">
      <TitleSection titleUp="Bienvenido" titleMain1="¿Por qué ser un osezno?" titleMain2="">
      </TitleSection>
      <div class="container3 px-lg-5">
        <p class="ff-museo-sans fs-sm-13 px-lg-5 text-center mt-4">
          Porque aprenderás a como es formar parte de un equipo de fútbol americano infantil y juvenil para niños y
          niñas campeón. En Oseznos de Morelia nos justa ganar, pero sabemos que no es lo más importante, ya que lo que
          más nos importa es fomentar los valores que predica el fútbol americano: la disciplina y el trabajo en equipo,
          respeto por los demás, honestidad (un valor muy valioso para el fútbol americano pero más aún para la vida),
          aceptar las frustraciones (ya que no siempre se gana), asumir responsabilidades, la importancia del esfuerzo
          (no siempre se gana, pero siempre hay que darlo todo) y por supuesto, <strong>aprender a ganar</strong>.
          En Oseznos nuestro objetivo no es crear jugadores, sino utilizar las herramientas de este deporte para crear
          seres humanos de bien.
        </p>
      </div>
      <TableBenefits class="pt-5">
      </TableBenefits>
    </section>

    <!--    <section class="space-section-bottom ">-->
    <!--      &lt;!&ndash;        <TitleSection titleUp="Bienvenido" titleMain1="Metodología 2020" titleMain2=""></TitleSection>&ndash;&gt;-->
    <!--      <div class="d-flex mt-5 pt-5">-->
    <!--        <div class="col-6 bg-yellow-before skew-left-before d-flex py-5 mx-1">-->
    <!--          <div class="offset-1">-->

    <!--            <ul class="list-school">-->
    <!--              <p class="ff-old-school-in-alt fs-46 color-purple ">Incluye</p>-->
    <!--              <li>-->
    <!--                <span class="number">01</span>-->
    <!--                Transporte al campo desde puntos céntricos de la ciudad-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">02</span>-->
    <!--                Seguro de gastos médicos mayores-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">03</span>-->
    <!--                Uniforme corto (short y playera)-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">04</span>-->
    <!--                Material de campo-->
    <!--              </li>-->
    <!--            </ul>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="col-6 bg-purple-darker-before skew-right-before py-3 mx-1 d-flex align-items-center">-->
    <!--          <div class="col-7 offset-2">-->

    <!--            &lt;!&ndash;              <a target="_blank"&ndash;&gt;-->
    <!--            &lt;!&ndash;                 href="https://wa.me/5214432066522?text=Quiero más%20información%20sobre%20Club%20Oseznos"&ndash;&gt;-->
    <!--            &lt;!&ndash;                 class="trapeze trapeze-white ff-bebas px-lg-4 px-3 px-sm-2 px-md-2 mx-2 fs-sm-13">&ndash;&gt;-->
    <!--            &lt;!&ndash;                Aprende más&ndash;&gt;-->
    <!--            &lt;!&ndash;              </a>&ndash;&gt;-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <section class="space-section-bottom ">
      <div class="d-flex mt-5 pt-5 flex-wrap py-5">
        <div class="col-12 col-lg-6 skew-yellow-school skew-left-before d-flex py-5 h-100-sm-before">
          <div class="offset-lg-1 offset-sm-1 offset-md-2 py-sm-5">
            <ul class="list-school py-5">
              <p class="ff-old-school-in-alt fs-46 color-purple ">Tu suscripción <br> incluye</p>
              <li>
                <span class="number">01</span>
                Transporte al campo desde puntos céntricos de la ciudad
              </li>
              <li>
                <span class="number">02</span>
                Seguro de gastos médicos mayores
              </li>
              <li>
                <span class="number">03</span>
                Uniforme corto (short y playera)
              </li>
              <li>
                <span class="number">04</span>
                Material de campo
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-12 col-lg-6 skew-purple-school skew-right-before py-5 d-flex align-items-center mt-md-5 mt-lg-0">
          <div class="col-12 col-sm-11 col-md-8 col-lg-8 offset-1 offset-md-2 offset-lg-2 px-4">
            <h2 class="ff-old-school-in-alt fs-46 color-yellow">La mensualidad</h2>
            <p class="fs-14 text-white ff-museo-sans">
              <strong>El precio de la mensualidad es de $650 ¡Sin pago de inscripción!</strong>
            </p>
            <p class="fs-14 text-white ff-museo-sans">
              Entrenamos martes, miércoles y jueves de 5:00 a 7:00 pm.
            </p>
            <p class="fs-14 text-white ff-museo-sans">
              *No incluye equipo o inscripción a la liga de temporada.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="torn-bg torn-bg-purple space-section-bottom pt-5 pt-md-0">
      <div class="content-torn container1 px-1 d-flex align-items-center flex-wrap">
        <div class="d-flex flex-wrap ball-section justify-content-center">
          <div class="col-12 col-sm-6 col-md-7 col-lg-9 px-0 d-md-flex align-items-center">
            <div class="ball-wrapper">
              <img src="~assets/img/ball.png" alt="Balón Oseznos"/>
            </div>
            <div class="mr-lg- my-4 px-4 px-md-0">
              <h2 class="font-italic color-yellow ff-old-school-in-alt fs-40">
                ¡ VEN A LA CLASE MUESTRA !
              </h2>
              <h3 class="ff-bebas text-white fs-sm-13 tracking-50 pr-4 font-italic">
                SIN COMPROMISOS, VEN Y APRENDE DESDE CERO O A PARTIR DE UN NIVEL
              </h3>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-5 col-lg-3 px-0 d-flex align-items-center justify-content-center">
            <nuxt-link
              to="registro"
              class="trapeze trapeze-yellow ff-bebas px-md-5 px-5 px-sm-4 mx-2 line-overflow line-overflow-w fs-sm-13">
              Aparta tu lugar
            </nuxt-link>
            <a
              target="_blank" href="https://wa.me/5214432066522?text=Quiero más%20información%20sobre%20Club%20Oseznos"
              class="d-none trapeze trapeze-white ff-bebas px-lg-4 px-3 px-sm-2 px-md-2 mx-2 fs-sm-13"
            >
              Solicita más información
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="map-section torn-bg torn-bg-white space-section-bottom">
      <div class="wrapper-map">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=19%C2%B039'41.7%22N%20101%C2%B009'24.2%22W&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe
            >
          </div>
        </div>
      </div>
    </section>
    <section class="space-section-bottom">
      <div class="py-4 title-form torn-bg torn-bg-purple">
        <div class="container2 py-4 d-flex justify-content-center">
          <div class="d-flex align-items-center flex-wrap">
            <h2 class="color-yellow ff-old-school-in-alt fs-46 mb-3 my-md-0 text-center">
              ¿Tienes Dudas? Contáctanos
            </h2>
          </div>
        </div>
      </div>
      <div class="container4 mt-5">
        <ContactForm formOrigin="Landing" colorText="color-purple" classExtra="input-purple"></ContactForm>
      </div>
    </section>
    <SiteFooter class="footer-landing"></SiteFooter>
  </div>
</template>

<script>
  import SiteHeader from "~/components/layout/SiteHeader";
  import SiteFooter from "~/components/layout/SiteFooter";

  import TitleSection from "~/components/commons/TitleSection";
  import TableBenefits from "~/components/commons/TableBenefits";
  import SliderItem from "~/components/pages/home/SliderItem";
  import ContactForm from "~/components/commons/ContactForm";

  export default {
    name: "landing-page",
    components: {
      SiteFooter,
      SiteHeader,
      SliderItem,
      TitleSection,
      TableBenefits,
      ContactForm
    },
    head() {
      return {
        title: "La mejor escuela de fútbol americano y tochito",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Oseznos de Morelia, es la mejor escuela de fútbol americano para niñas y niños, enseñamos las bases del juego y los valores del deporte"
          },
          {
            property: "og:description",
            content:
              "Oseznos de Morelia, es la mejor escuela de fútbol americano para niñas y niños, enseñamos las bases del juego y los valores del deporte",
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
            content: "Oseznos de Morelia | La mejor escuela de fútbol americano y tochito",
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
            content: "Oseznos de Morelia | La mejor escuela de fútbol americano y tochito",
            vmid: "twitter:title"
          },
          {
            property: "twitter:description",
            content:
              "",
            vmid: "twitter:description"
          }
        ]
      };
    }
  }
</script>

<style scoped>

</style>
