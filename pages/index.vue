<template>
  <div class="home overflow-hidden">
    <SiteHeader></SiteHeader>
    <section class="hero ">
      <div class="slider-wrapper h-100">
        <div ref="sliderContainer" class="slider-container h-100">
          <SliderItem class="overflow-hidden" titleLg1="¡Inscripciones" titleLg2="Abiertas!" bgImg="player-2">
          </SliderItem>
          <SliderItem class="overflow-hidden">
          </SliderItem>
          <SliderItem class="overflow-hidden" titleLg1="¡Somos oseznos" titleLg2="De Morelia!" bgImg="player-3">
          </SliderItem>
        </div>
      </div>
    </section>
    <section class="torn-bg torn-bg-purple space-section-bottom">
      <div class="w-100">
        <div
          class="content-torn px-3 px-lg-5 d-flex flex-wrap align-items-center justify-content-center"
        >
          <div class="col-12 col-sm-6 col-md-7 col-lg-8 px-0">
            <h2 class="color-yellow ff-old-school-regular fs-22 mb-3 my-md-0">
              ¡ Forma parte de los campeones, inscríbete a oseznos de Morelia !,
              ¡ VEN A LA CLASE MUESTRA !
            </h2>
          </div>
          <div class="col-12 col-sm-6 col-md-5 col-lg-4 d-flex px-0 justify-content-center">
            <nuxt-link
              to="contact"
              class="text-center trapeze trapeze-yellow ff-bebas px-lg-3 px-2 px-sm-1 mx-2 mx-sm-1 mx-md-2 fs-sm-13 line-overflow line-overflow-w">
              Solicita más información
            </nuxt-link
            >
            <a
              target="_blank" href="https://wa.me/5214433679536?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Club%20Oseznos"
              class="text-center trapeze trapeze-green ff-bebas px-lg-3 px-2 px-sm-1 mx-2 mx-sm-1 mx-md-2 fs-sm-13"
            >
              <img
                src="~assets/img/svg/wats-on-button.svg"
                alt="Whatsapp Ozesnos"
                class="mr-2"
              />
              Hablar por whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
    <PreviusGames></PreviusGames>
    <section class="space-section-bottom container2">
      <div class="d-flex flex-wrap">
        <div class="col-12 col-sm-5 col-md-4 px-md-0">
          <h2>
            <span
              class="trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-3 line-overflow-purp line-overflow font-italic"
            >Acerca del club</span
            >
          </h2>
          <h3 class="ff-old-school-in-alt font-italic color-purple fs-sm-60 line-height-1 number-bg-container">

            <div class="number-bg-container d-none d-sm-block">
              <div class="number-right number-bg fs-number-sm-139">
                01
              </div>
            </div>
            <span class="">Oseznos</span>
            <br class="d-none d-sm-block">
            <span>de Morelia</span>
          </h3>
          <p class="ff-museo-sans fs-sm-18 mt-3">
            <strong>Para niñas y niños.</strong>
            Oseznos es el equipo de fútbol americano y tochito infantil y juvenil de Morelia, cuyo objetivo no es crear
            jugadores, sino utilizar las herramientas de este deporte para fomentar los valores que hagan de nuestros
            oseznos seres humanos de bien. Junto a nuestros líderes, Mario Salas (Director Deportivo), considerado el
            mejor jugador de la liga mexicana de fútbol americano y Axel Valderrama (Head Coach), jugador de gran
            trayectoria, buscamos compartir los mejores conocimientos y habilidades, además de, fomentar la
            responsabilidad, lealtad y trabajo en equipo.
          </p>
          <nuxt-link
            to="contact"
            class="trapeze text-white line-overflow line-overflow-yellow trapeze-purple X ff-bebas w-fit-content fs-sm-13 tracking-50 px-4"
          >Habla con nosotros
          </nuxt-link
          >
          <div class="game-scratch d-none d-lg-block">
            <div class="inner-scratch">
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-7 col-md-7 offset-md-1 mt-5 mt-lg-0 px-0">
          <div class="video-wrapper">
            <div
              class="video-play paused"
              @click="startPause"
              ref="playButton"
            >
            </div>
            <div class="purple-opacity">
            </div>
            <video loop @click="startPause" width="100%" ref="miVideoPlay">
              <source src="/videos/v2.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="w-100">
            <h3 class="text-uppercase ff-old-school-in-alt fs-28 mt-1 color-purple">“La garra se adopta en el alma y en
              la camiseta.”</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="space-section-bottom">
      <TitleSection titleUp="Bienvenido" titleMain1="¿Por qué ser un osezno?" titleMain2="">
      </TitleSection>
      <div class="w-100 d-flex justify-content-center">

        <div class="number-bg-container">
          <div class="number-center number-bg">
            02
          </div>
        </div>
      </div>
      <div class="container3 px-lg-5">
        <p class="ff-museo-sans fs-16 px-lg-5 text-center mt-4">
          Porque aprenderás a como es formar parte de un equipo de fútbol americano <strong>infantil y juvenil para niños y
          niñas</strong> campeón. En Oseznos de Morelia nos justa ganar, pero sabemos que no es lo más importante, ya que lo que
          más nos importa es fomentar los valores que predica el fútbol americano: la disciplina y el trabajo en equipo,
          respeto por los demás, honestidad (un valor muy valioso para el fútbol americano pero más aún para la vida),
          aceptar las frustraciones (ya que no siempre se gana), asumir responsabilidades, la importancia del esfuerzo
          (no siempre se gana, pero siempre hay que darlo todo) y por supuesto, <strong>aprender a ganar</strong>.
        </p>
      </div>
      <TableBenefits class="pt-5">
      </TableBenefits>
      <div class="d-flex gallery container4  mt-5 pt-5 flex-wrap flex-sm-nowrap justify-content-center w-100-xs">
        <div class="col-12 col-sm-6 col-md-5 col-lg-6 px-0 d-flex lef-less-50 mx-sm-4 mx-lg-0">
          <div @click="SwitchToModal" class="col-7 col-lg mr-1 mx-lg-2 my-1 my-lg-0 gallery-item">
            <img src="../assets/img/gallery/gal-15.jpg" alt="">
          </div>
          <div @click="SwitchToModal" class="col-7 col-lg ml-1 mx-lg-2 my-1 my-lg-0 gallery-item">
            <img src="../assets/img/gallery/gal-17.jpg" alt="">
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-5 col-lg-6 px-0 d-flex lef-less-50 mx-sm-4 ml-sm-5 mx-lg-0">
          <div @click="SwitchToModal" class="col-7 col-lg mr-1 mx-lg-2 my-1 my-lg-0 gallery-item">
            <img src="../assets/img/gallery/gal-18.jpg" alt="">
          </div>
          <div @click="SwitchToModal" class="col-7 col-lg ml-1 mx-lg-2 my-1 my-lg-0 gallery-item">
            <img src="../assets/img/gallery/gal-5.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <FormInscription></FormInscription>
    <PartnersSection></PartnersSection>
    <section class="space-section-bottom container2">
      <h2>
        <span
          class="trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-3 line-overflow-purp line-overflow font-italic"
        >Galería de fotos</span
        >
      </h2>
      <div class="d-flex justify-content-between">
        <h2 class="font-italic ff-old-school-in-alt color-purple fs-60">
          El salón de la fama
        </h2>
        <nuxt-link
          to="galeria"
          class="trapeze text-white trapeze-purple ff-bebas w-fit-content px-4 d-none d-sm-block fs-sm-13 line-overflow line-overflow-yellow"
        >
          Ver todas las fotos
        </nuxt-link>
      </div>
      <div class="gallery-section d-flex flex-wrap mt-5">
        <div
          class="col-lg-2 col-md-3 col-sm-4 col-6 my-1 px-1"
          v-for="(item, index) in gallery"
          :key="index"

        >
          <!-- {{item}} -->
          <div class="gallery-container" @click="SwitchToModal">
            <img
              :src="require('~/assets/img/gallery/' + item)"
              :alt="'Oseznos Club foto ' + index + 1"
            />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between pb-5">
        <a
          href="#"
          class="trapeze text-white trapeze-purple ff-bebas w-fit-content d-block d-sm-none px-4 mt-4 fs-sm-13"
        >
          Ver todas las fotos
        </a>
      </div>
    </section>

    <section class="torn-bg torn-bg-purple space-section-bottom pt-5 pt-sm-4 pt-md-4">
      <div class="content-torn container1 px-1 d-flex align-items-center flex-wrap">
        <div class="d-flex flex-wrap ball-section justify-content-center">
          <div class="col-12 pr-4 pr-sm-0 pr-md-4 col-sm-6 col-md-7 col-lg-8 px-0 d-md-flex align-items-center">
            <div class="ball-wrapper">
              <img src="~assets/img/ball.png" alt="Balón Oseznos"/>
            </div>
            <div class="mr-lg- my-4 px-4 px-md-0 pr-sm-3 pl-sm-0">
              <h2 class="font-italic color-yellow ff-old-school-in-alt fs-40">
                ¡ VEN A LA CLASE MUESTRA !
              </h2>
              <h3 class="ff-bebas text-white fs-sm-13 tracking-50 pr-4 font-italic">
                SIN COMPROMISOS, VEN Y APRENDE DESDE CERO O A PARTIR DE UN NIVEL
              </h3>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-5 col-lg-4 px-0 d-flex align-items-center justify-content-center">
            <nuxt-link
              to="registro"
              class="text-center trapeze trapeze-yellow ff-bebas px-md-4 px-4 px-sm-3 mx-2 line-overflow line-overflow-w fs-sm-13">
              Aparta tu lugar
            </nuxt-link>
            <a
              target="_blank" href="https://wa.me/5214433679536?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Club%20Oseznos"
              class="text-center trapeze trapeze-white ff-bebas px-lg-4 px-3 px-sm-2 px-md-2 mx-2 fs-sm-13"
            >
              Solicita más información
            </a>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter></SiteFooter>
    <b-modal size="lg" hide-footer centered id="my-modal" class="text-center">
      <img :src="imgOnModalGallery" alt="Imagen de oseznos"/>
    </b-modal>
    <div class="courtain" v-show="courtain">
      <img
        src="~assets/img/svg/header-logo.svg"
        alt="Oseznos logo header"
        class="oseznos-menu"
      />
    </div>
  </div>
</template>
<script>
  import Logo from "~/components/Logo.vue";
  import SiteHeader from "~/components/layout/SiteHeader";
  import SiteFooter from "~/components/layout/SiteFooter";
  import SliderItem from "~/components/pages/home/SliderItem";
  import PreviusGames from "~/components/commons/PreviusGames";
  import TitleSection from "~/components/commons/TitleSection";
  import FormInscription from "~/components/commons/FormInscription";
  import TableBenefits from "~/components/commons/TableBenefits";

  import PartnersSection from "~/components/commons/PartnersSection";
  import mapMutations from "vuex";

  export default {
    components: {
      Logo,
      SiteHeader,
      SiteFooter,
      SliderItem,
      PreviusGames,
      TitleSection,
      FormInscription,
      PartnersSection,
      TableBenefits
    },
    computed: {
      contador() {
        return this.$store.state.counter;
      }
    },
    data() {
      return {
        gallery: [
          "gal-47.jpg",
          "gal-45.jpg",
          "gal-32.jpg",
          "gal-33.jpg",
          "gal-34.jpg",
          "gal-35.jpg",
          "gal-48.jpg",
          "gal-43.jpg",
          "gal-52.jpg",
          "gal-51.jpg",
          "gal-40.jpg",
          "gal-44.jpg",
          "gal-5.jpg",
          "gal-6.jpg",
          "gal-7.jpg",
          "gal-8.jpg",
          "gal-9.jpg",
          "gal-10.jpg",
        ],
        video: "",
        playButton: "",
        imgOnModalGallery: null,
        courtain: true,
        sliderContainer: null,
        numberItems: 3 - 1,
        conter: 0,
        interval: null
      };
    },
    transition: "component-fade",
    mounted() {
      this.sliderContainer = this.$refs.sliderContainer;
      this.interval = setInterval(() => {
        this.sliderLeft()
      }, 5000);


      this.video = this.$refs.miVideoPlay;
      this.PlayButton = this.$refs.playButton;
      this.$store.commit("increment");
      console.log(this.$store.state.counter);
      if (this.$store.state.counter > 1) {
        this.courtain = false;
      }
    },
    methods: {
      startPause() {
        console.log(this.playButton);
        if (this.video.paused) {
          this.video.play();
          this.$refs.playButton.classList.remove("paused");
          this.$refs.playButton.classList.add("playing");
        } else {
          this.video.pause();
          this.$refs.playButton.classList.remove("playing");
          this.$refs.playButton.classList.add("paused");
        }
      },
      SwitchToModal(el, evt) {
        // el.target.parentElement.classList.add('img-wrapper')
        // console.log(el);
        // console.log(el.target.currentSrc);
        let srcElement = null;
        srcElement = (el.target.children[0] !== undefined) ? el.target.children[0].currentSrc : el.target.currentSrc;

        this.imgOnModalGallery = srcElement;
        this.$bvModal.show("my-modal");
      },
      sliderLeft() {
        this.conter++
        if (this.conter <= this.numberItems) {
          this.sliderContainer.style.left = '-' + this.conter * 100 + '%'
        } else {
          this.conter = 0
          this.sliderContainer.style.left = '-' + this.conter * 100 + '%'
        }
      },
      sliderRight() {
        this.conter--;
        if (this.conter < 0) {
          this.conter = this.numberItems
          this.sliderContainer.style.left = '-' + this.conter * 100 + '%'
        } else {
          this.sliderContainer.style.left = '-' + this.conter * 100 + '%'
        }
      },
      reset() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
          this.sliderLeft()
        }, 5000);
      }
    },
    head() {
      return {
        title: "El Equipo de Fútbol Americano de Morelia",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Oseznos, el equipo de fútbol americano infantil y juvenil para niños de 5 a 18 años en Morelia que pretende formar seres humanos con disciplina, honor y garra."
          },
          {
            property: "og:description",
            content:
              "Oseznos, el equipo de fútbol americano infantil y juvenil para niños de 5 a 18 años en Morelia que pretende formar seres humanos con disciplina, honor y garra.",
            vmid: "og:description"
          },
          {
            property: "og:url",
            content: "http://oseznos.com.mx/",
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
            content: "Oseznos de Morelia | El Equipo de Fútbol Americano de Morelia",
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
            content: "Oseznos de Morelia | El Equipo de Fútbol Americano de Morelia",
            vmid: "twitter:title"
          },
          {
            property: "twitter:description",
            content:
              "Oseznos, el equipo de fútbol americano infantil y juvenil para niños de 5 a 18 años en Morelia que pretende formar seres humanos con disciplina, honor y garra.",
            vmid: "twitter:description"
          }
        ]
      };
    }
  };
</script>

<style></style>
