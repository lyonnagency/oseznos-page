<template>
  <div class="la-escuela-page overflow-hidden">
    <SiteHeader></SiteHeader>
    <section class="torn-bg torn-bg-purple space-section-bottom space-section-top h-auto py-5">
      <div class="content-torn container1 d-flex align-items-center flex-wrap py-4">
        <h1 class="color-yellow ff-old-school-in-alt fs-87 torn-claw">
          La escuela
        </h1>
      </div>
    </section>
    <section class="space-section-bottom">
      <div class="d-flex container2 flex-wrap">
        <div class="col-12 col-md-5 col-lg-5 d-flex align-items-center flex-wrap">
          <div class="">
            <h2 class="text-center">
            <span
              class="trapeze trapeze-yellow mx-auto mr-md-auto ml-md-0 py-1 w-fit-content ff-bebas fs-18 px-4 line-overflow-purp line-overflow font-italic">
                  Bienvenido
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
              La mejor escuela de fútbol americano y tochito de Morelia
              para niñas y niños
            </h2>
            <!--            <h2>-->
            <!--              <span-->
            <!--                class="trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-4 line-overflow-purp line-overflow font-italic">-->
            <!--                Bienvenido-->
            <!--              </span>-->
            <!--            </h2>-->
            <!--            <div class="w-100 d-flex justify-content-center">-->
            <!--              <div class="number-bg-container">-->
            <!--                <div class="number-left number-bg">-->
            <!--                  02-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
            <!--            <h2 class="ff-old-school-in-alt color-purple fs-50 line-height-1 mt-5 ml-5 pl-4">-->
            <!--              La mejor escuela de fútbol americano y tochito de Morelia-->
            <!--              para niñas y niños.-->
            <!--            </h2>-->
          </div>
        </div>
        <div class="col-12 col-md-7 col-lg-6 offset-lg-1">
          <img class="img-fluid" src="../assets/img/svg/team1.svg" alt="Oseznos de Morelia - La escuela">
        </div>
      </div>
    </section>
    <section class="space-section-bottom">
      <TitleSection titleUp="Bienvenido" titleMain1="¿Qué aprenderás?" titleMain2=""></TitleSection>
      <TableBenefits></TableBenefits>
    </section>
    <section class="video-section video-wrapper mt-5 space-section-bottom">
      <div
        class="video-play-alt video-play paused"
        @click="startPause($event, 'miVideoPlayC', 'playButtonC')"
        ref="playButtonC"
      ></div>
      <div @click="startPause($event, 'miVideoPlayC', 'playButtonC')" class="purple-opacity purple-opacity-darker">
        <div class="oseznos-face-floating honor-proud">

        </div>
      </div>
      <video loop width="100%" ref="miVideoPlayC">
        <source src="/videos/v4.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </section>
    <section class="space-section-bottom ">
      <TitleSection titleUp="Bienvenido" titleMain1="Metodología 2020" titleMain2=""></TitleSection>
      <div class="d-flex mt-5 pt-5 flex-wrap">
        <div class="col-12 col-lg-6 skew-yellow-school skew-left-before d-flex py-5">
          <div class="offset-lg-1 offset-sm-1 offset-md-2">
            <ul class="list-school">
              <li>
                <span class="number">01</span>
                Enero-Febrero: Acondicionamiento
              </li>
              <li>
                <span class="number">02</span>
                Marzo: Fundamentos del Fútbol Americano
              </li>
              <li>
                <span class="number">03</span>
                Abril: Fundamentos y Equipamiento
              </li>
              <li>
                <span class="number">04</span>
                Mayo: Golpeo y aspectos de campo
              </li>
              <li>
                <span class="number">05</span>
                Junio: Situación de juego
              </li>
              <li>
                <span class="number">06</span>
                Julio-Agosto: Temporada 2020
              </li>
              <li>
                <span class="number">07</span>
                Septiembre-Diciembre: Entrenamiento de seguimiento
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-12 col-lg-6 skew-purple-school skew-right-before py-5 d-flex align-items-center mt-md-5 mt-lg-0">
          <div class="col-12 col-sm-11 col-md-8 col-lg-8 offset-1 offset-md-2 offset-lg-2 px-4">
            <h2 class="ff-old-school-in-alt fs-60 color-yellow text-center text-sm-left">Entrenamos todo el año</h2>
            <p class="fs-14 text-white ff-museo-sans text-center text-sm-left">
              En Oseznos trabajamos con visión de fútbol americano, estructura y filosofía de juego. Especialización por
              posiciones, respetando la integridad de los jugadores.
            </p>
            <a target="_blank" href="https://wa.me/5214432066522?text=Quiero más%20información%20sobre%20Club%20Oseznos"
               class="trapeze mx-auto ml-sm-0 trapeze-white ff-bebas px-lg-4 px-3 px-sm-4 mx-2 fs-sm-13">
              Aprende más
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="space-section-bottom">
      <TitleSection titleUp="Cápsulas" titleMain1="¿QUIERES SER COMO LOS GRANDES?" titleMain2=""></TitleSection>
      <div class="px-lg-5 mt-5">
        <p class="fs-16 ff-museo-sans px-5 px-lg-5 text-center text-lg-center">
          Si quieres jugar este maravilloso deporte,
          pero no sabes cómo se juega, no te preocupes, Oseznos de Morelia es la mejor escuela de fútbol americano y tochito de
          Morelia para niñas y niños. Nos justa fomentar los valores del fútbol americano y sabemos que, tanto a niñas y
          niños, como a jóvenes, es importante enseñarles estos valores, pero sin que dejen de lado lo más importante,
          divertirse jugando el deporte que les gusta, el fútbol americano. Da un vistazo a nuestras cápsulas deportivas
          y mira cómo se juega al futbol americano y como juega Oseznos de Morelia.
        </p>
      </div>
      <div class="container3 mt-5 pt-lg-5 px-3">
        <div class="d-flex justify-content-center flex-wrap capsules-video pt-lg-5">
          <div class="col-12 col-sm-6 col-lg-3 px-1 my-4 skew-video">
            <div class="number-corner">
              01
            </div>
            <div class="video-wrapper">
              <div
                class="video-play paused"
                @click="startPause($event, 'miVideoPlay1', 'playButton1')"
                ref="playButton1"
              >
              </div>
              <div class="purple-opacity">
                <div class="info pl-5">
                  <span>
                  Oseznos tip# 1
                </span>
                  <br>
                  <span>
                  Para football americano
                </span>
                </div>

              </div>
              <video loop @click="startPause($event, 'miVideoPlay1', 'playButton1')" width="100%" ref="miVideoPlay1">
                <source src="/videos/v1.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-1 my-4 skew-video">
            <div class="number-corner">
              02
            </div>
            <div class="video-wrapper">
              <div
                class="video-play paused"
                @click="startPause($event, 'miVideoPlay2', 'playButton2')"
                ref="playButton2"
              >
              </div>
              <div class="purple-opacity">
                <div class="info pl-5">
                  <span>
                  Oseznos tip# 2
                </span>
                  <br>
                  <span>
                  Para football americano
                </span>
                </div>
              </div>
              <video loop @click="startPause($event, 'miVideoPlay2', 'playButton2')" width="100%" ref="miVideoPlay2">
                <source src="/videos/v3.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-1 my-4 skew-video">
            <div class="number-corner">
              03
            </div>
            <div class="video-wrapper">
              <div
                class="video-play paused"
                @click="startPause($event, 'miVideoPlay3', 'playButton3')"
                ref="playButton3"
              >
              </div>
              <div class="purple-opacity">
                <div class="info pl-5">
                  <span>
                  Oseznos tip# 3
                </span>
                  <br>
                  <span>
                  Para football americano
                </span>
                </div>
              </div>
              <video loop @click="startPause($event, 'miVideoPlay3', 'playButton3')" width="100%" ref="miVideoPlay3">
                <source src="/videos/v2.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-1 my-4 skew-video">
            <div class="number-corner">
              04
            </div>
            <div class="video-wrapper">
              <div
                class="video-play paused"
                @click="startPause($event, 'miVideoPlay4', 'playButton4')"
                ref="playButton4"
              >
              </div>
              <div class="purple-opacity">
                <div class="info pl-5">
                  <span>
                  Oseznos tip# 4
                </span>
                  <br>
                  <span>
                  Para football americano
                </span>
                </div>
              </div>
              <video loop @click="startPause($event, 'miVideoPlay4', 'playButton4')" width="100%" ref="miVideoPlay4">
                <source src="/videos/v4.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
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


  import TableBenefits from "~/components/commons/TableBenefits";
  import FormInscription from "~/components/commons/FormInscription";
  import PartnersSection from "~/components/commons/PartnersSection";

  export default {
    name: "la-escuela",
    components: {
      SiteFooter,
      SiteHeader,
      TitleSection,
      FormInscription,
      PartnersSection,
      TableBenefits
    },
    data() {
      return {
        video: "",
        playButton: "",
      }
    },
    methods: {
      startPause(e, idVideo, idClass) {
        // console.log(this.$refs);

        this.video = this.$refs[idVideo];
        console.log(idVideo);
        console.log(this.$refs);
        this.PlayButton = this.$refs[idClass];
        console.log(this.video);
        if (this.video.paused) {
          this.video.play();
          this.PlayButton.classList.remove("paused");
          this.PlayButton.classList.add("playing");
        } else {
          this.video.pause();
          this.PlayButton.classList.remove("playing");
          this.PlayButton.classList.add("paused");
        }
      }
    },
    mounted() {
      this.video = this.$refs.miVideoPlay;
      this.PlayButton = this.$refs.playButton;
    },
    head() {
      return {
        title: "La mejor escuela de fútbol americano y tochito",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Oseznos de Morelia, como escuela de fútbol americano para niñas y niños, entrenamos todo el año, enseñamos las bases del juego y los valores del deporte"
          },
          {
            property: "og:description",
            content:
              "Oseznos de Morelia, como escuela de fútbol americano para niñas y niños, entrenamos todo el año, enseñamos las bases del juego y los valores del deporte",
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
              "Oseznos de Morelia, como escuela de fútbol americano para niñas y niños, entrenamos todo el año, enseñamos las bases del juego y los valores del deporte",
            vmid: "twitter:description"
          }
        ]
      };
    }
  }
</script>

<style scoped>

</style>
