<template>
  <div class="el-club-page overflow-hidden">
    <SiteHeader></SiteHeader>
    <section class="torn-bg torn-bg-purple space-section-bottom space-section-top h-auto py-5">
      <div class="content-torn container1 d-flex align-items-center flex-wrap py-4">
        <h1 class="color-yellow ff-old-school-in-alt fs-87 torn-claw">
          El club
        </h1>
      </div>
    </section>
    <section class="pb-5">
      <div class="container4 ">
        <TitleSection titleUp="Acerca del club" titleMain1="Somos un club con garra" titleMain2="">
        </TitleSection>
        <p class="fs-16 ff-museo-sans text-md-center mt-4 px-md-5 ">
          Este proyecto busca compartir los mejores conocimientos y habilidades integradas dentro del fútbol americano como lo son: coordinación grupal e individual,
          precisión, capacidad de reacción y trabajo en equipo, además de, fomentar la responsabilidad, lealtad y la
          amistad. Nuestro objetivo como club no es crear jugadores, sino utilizar las herramientas de este deporte para crear
          seres humanos de bien.
        </p>
      </div>
    </section>
    <section class="video-section video-wrapper mt-5">
      <div
        class="video-play-alt video-play paused"
        @click="startPause"
        ref="playButtonC">
      </div>
      <div @click="startPause" class="purple-opacity purple-opacity-darker">
        <div class="oseznos-face-floating honor-proud">

        </div>
      </div>
      <video loop width="100%" ref="miVideoPlayC">
        <source src="/videos/v4.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </section>
    <section class="space-section-bottom">
      <div class="d-flex mt-5 pt-5 flex-wrap">
        <div class="col-12 col-lg-6 skew-left-before bg-purple-darker-before d-flex py-5 py-sm-3 py-md-4 py-lg-5">
          <div class="col-10 col-md-7 offset-md-1 offset-lg-2 py-5">
            <TitleSectionLeft>
            </TitleSectionLeft>
            <p class="ff-museo-sans text-white fs-14 mt-4">
              Formar niños con liderazgo, disciplina, trabajo en equipo y demás valores que fomenta la práctica del
              fútbol americano.
            </p>
          </div>
        </div>
        <div
          class="col-12 col-lg-6 skew-right-before bg-yellow-before py-5 py-sm-2 py-md-5 py-lg-5 d-flex align-items-center ">
          <div class="col-10 col-sm-7 offset-2 offset-sm-4 offset-md-2 py-5">
            <TitleSectionLeft
              class="title-xs-right"
              colorVersion="on-yellow"
              mainTxt="Visión">
            </TitleSectionLeft>
            <p class="ff-museo-sans fs-14 mt-4 text-right text-lg-left">
              Ser una de las mejores organizaciones de fútbol americano en México, compitiendo con los mejores
              equipos y/o universidades (Fademac-ONEFA).
            </p>
            <div class="w-100 d-flex justify-content-end overflow-hidden ">
              <div class="oseznos-face-floating floating-right">
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </section>
    <section class="space-section-bottom container2">
      <div class="d-flex flex-wrap align-items-center">
        <div class="col-12 col-md-5 col-lg-4 px-0">
          <h2 class="text-center">
              <span
                class="trapeze trapeze-yellow mx-auto mr-md-auto ml-md-0 py-1 w-fit-content ff-bebas fs-18 px-4 line-overflow-purp line-overflow font-italic">
                  Juega en un equipo de verdad
              </span>
          </h2>
          <div class="w-100 d-flex justify-content-center">
            <div class="number-bg-container">
              <div class="number-left number-bg">
                02
              </div>
            </div>
          </div>
          <h2
            class="ff-old-school-in-alt text-center text-md-left color-purple fs-50 line-height-1 mt-5 ml-md-5 pl-md-4">
            CON LA EXPERIENCIA DE JUGADORES PROFESIONALES
          </h2>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-7 offset-md-1 mt-5 mt-lg-0 px-0">
          <img class="img-fluid" src="../assets/img/svg/coaches10.svg" alt="Oseznos de Morelia - La escuela">
        </div>
      </div>
    </section>
    <section class="  ">
      <div class="d-flex flex-md-wrap flex-wrap-reverse align-items-center">
        <div class="col-12 col-md-6 mt-5 mt-lg-0 px-0">
          <img class="img-fluid" src="../assets/img/svg/team2.svg" alt="Oseznos de Morelia - La escuela">
        </div>
        <div class="col-12 col-md-4 px-md-0 offset-md-1 ">
<!--          <TitleSectionLeft-->
<!--            colorVersion="on-white"-->
<!--            mainTxt="Creamos seres humanos en plenitud"-->
<!--            trapezeTxt="Valores"-->
<!--            class="text-center text-md-left fs-10"-->
<!--          >-->
<!--          </TitleSectionLeft>-->

          <div class="title-section-left text-center text-md-left">
            <h2 class="text-center">
              <span
                class="trapeze trapeze-yellow mx-auto mr-md-auto ml-md-0 py-1 w-fit-content ff-bebas fs-18 px-4 line-overflow-purp line-overflow font-italic">
                  Valores
              </span>
            </h2>
            <h2
              class="ff-old-school-in-alt text-center text-md-left color-purple fs-50 line-height-1 mt-4">
              Creamos seres humanos en plenitud
            </h2>
          </div>
          <div class="w-100 d-flex justify-content-center d-md-none">
            <div class="number-bg-container">
              <div class="number-center number-bg">
                02
              </div>
            </div>
          </div>
          <p class="ff-museo-sans fs-sm-13 mt-4 text-center text-md-left">
            Oseznos utiliza las herramientas del futbol americano para fomentar los valores de Honestidad, Colaboración,
            Esfuerzo, Lealtad, Optimismo, Responsabilidad, Superación, Sacrificio, Sencillez y Respeto, para hacer de
            los oseznos personas de bien.
            <br>
          </p>
        </div>
        <div class="d-none d-md-block game-scratch2">
          <div class="inner-scratch">

          </div>
        </div>
      </div>
    </section>
    <section class="space-section-bottom mt-5">
      <TitleSection titleUp="Acerca del club" titleMain1="Los coaches" titleMain2="">
      </TitleSection>
      <!--      <div class="d-flex flex-wrap gallery container4 mt-5 px-md-5 justify-content-around">-->
      <div class="d-flex flex-wrap gallery mt-5 px-md-5 justify-content-around col-lg-9 mx-lg-auto">
        <div class="col-12 col-sm-6  mx-md-0 px-0 px-sm-1">
          <div class="gallery-item bg-light skew-reset">
            <img src="../assets/img/coaches/coach2.png" alt="Mario Salas Oseznos Morelia">
          </div>
          <div class="mx-4 px-2">
            <h2 class="d-flex mt-5">
            <span
              class="trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-5 line-overflow-purp line-overflow font-italic text-center">
              Mario Salas
            </span>
            </h2>
            <h3 class="ff-old-school-in-alt color-purple-darker fs-40">
              Director Deportivo
            </h3>
            <p class="ff-museo-sans fs-14">
              Exjugador de Osos Toluca, catalogado el mejor jugador de la liga de fútbol americano y quien llevó a
              México
              a la victoria con la selección de estrellas CONADEIP contra la selección de estrellas de Estados Unidos
              NCAA
              en 2014.
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-6 mx-md-0 px-0 px-sm-1">
          <div class="gallery-item bg-light skew-reset">
            <img src="../assets/img/coaches/coach1.png" alt="Axel Valderrama Oseznos Morelia">
          </div>
          <div class="mx-4 px-2">
            <h2 class="d-flex mt-5">
            <span
              class="trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-5 line-overflow-purp line-overflow font-italic ">
              Axel Valderrama
            </span>
            </h2>
            <h3 class="ff-old-school-in-alt color-purple-darker fs-40">
              Head Coach
            </h3>
            <p class="ff-museo-sans fs-14 ">
              Exjugador de Osos Toluca, subcampeón nacional 2014 CONADEIP primera fuerza, Coach campeón invicto FADEMAC
              grupo 2 en 2018, Coach campeón invicto OFAMO grupo 1 en 2019.
            </p>
          </div>
        </div>
      </div>
    </section>
    <FormInscription></FormInscription>
    <PartnersSection></PartnersSection>
    <SiteFooter class="footer-variant-2"></SiteFooter>
  </div>
</template>

<script>
  import SiteHeader from "~/components/layout/SiteHeader";
  import SiteFooter from "~/components/layout/SiteFooter";

  import TitleSection from "~/components/commons/TitleSection";
  import TitleSectionLeft from "~/components/commons/TitleSectionLeft";
  import FormInscription from "~/components/commons/FormInscription";
  import PartnersSection from "~/components/commons/PartnersSection";

  export default {
    name: "el-club",
    components: {
      SiteHeader,
      SiteFooter,
      TitleSection,
      TitleSectionLeft,
      FormInscription,
      PartnersSection
    },
    methods: {
      startPause() {
        console.log(this.playButton);
        if (this.video.paused) {
          this.video.play();
          this.$refs.playButtonC.classList.remove("paused");
          this.$refs.playButtonC.classList.add("playing");
        } else {
          this.video.pause();
          this.$refs.playButtonC.classList.remove("playing");
          this.$refs.playButtonC.classList.add("paused");
        }
      }
    },
    mounted() {
      this.video = this.$refs.miVideoPlayC;
      this.PlayButton = this.$refs.playButtonC;
    },
    data() {
      return {
        playButton: "",
        video: "",
      }
    },
    head() {
      return {
        title: "El club de fútbol americano de Morelia",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Oseznos de Morelia, con ayuda de jugadores profesionales busca formar uno de los clubes de fútbol americano infantil y juvenil más importantes de México."
          },
          {
            property: "og:description",
            content:
              "Oseznos de Morelia, con ayuda de jugadores profesionales busca formar uno de los clubes de fútbol americano infantil y juvenil más importantes de México.",
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
            content: "Oseznos de Morelia | El club de fútbol americano de Morelia",
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
            content: "Oseznos de Morelia | El club de fútbol americano de Morelia",
            vmid: "twitter:title"
          },
          {
            property: "twitter:description",
            content:
              "Oseznos de Morelia, con ayuda de jugadores profesionales busca formar uno de los clubes de fútbol americano infantil y juvenil más importantes de México.",
            vmid: "twitter:description"
          }
        ]
      };
    }
  }
</script>

<style>

</style>
