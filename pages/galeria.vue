<template>
  <div class="gallery-page">
    <SiteHeader></SiteHeader>
    <section class="torn-bg torn-bg-gray space-section-bottom space-section-top h-auto py-5">
      <div class="content-torn container1 d-flex align-items-center flex-wrap py-4">
        <h1 class="color-purple ff-old-school-in-alt fs-87 torn-claw torn-claw-yellow">
          Galería
        </h1>
      </div>
    </section>
    <section class="space-section-bottom d-flex justify-content-center flex-wrap">
      <div class="col-12">
        <div class="container-4 d-flex justify-content-center">
          <div class="col-12 col-lg-8 col-xl-6">
            <!-- In the gallery selectors it must be setted the "category-selector" class -->
            <div class="d-flex menu-toggler">
              <div class="col-6 col-sm py-3">
                <h3 class="category-selector active" @click="GetCurrentGallery($event,'id_1')">Todos</h3>
              </div>
              <div class="col-6 col-sm py-3">
                <h3 class="category-selector" @click="GetCurrentGallery($event,'id_2')">HIGHLIGHTS</h3>
              </div>
              <div class="col-6 col-sm py-3">
                <h3 class="category-selector" @click="GetCurrentGallery($event,'id_3')">Escuela</h3>
              </div>
              <div class="col-6 col-sm py-3">
                <h3 class="category-selector" @click="GetCurrentGallery($event,'id_4')">Club</h3>
              </div>
              <div class="col-6 col-sm py-3">
                <h3 class="category-selector" @click="GetCurrentGallery($event,'id_5')">Coaches</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <transition tag="div" class="d-flex flex-wrap" name="slide-fade">
        <div class="gallery-section d-flex flex-wrap mt-5 col-12 px-2 px-md-4 px-lg-0" v-if="showGallery">
          <div
            class="col-lg-2 col-md-3 col-sm-4 col-6 my-1 px-1"
            v-for="(item, index) in currentGallery"
            :key="index">
            <!-- {{item}} -->
            <div class="gallery-container" @click="SwitchToModal">
              <img
                :src="require('~/assets/img/gallery/' + item)"
                :alt="'Oseznos Club foto ' + index + 1"
              />
            </div>
          </div>
        </div>
      </transition>

    </section>
    <SiteFooter></SiteFooter>
    <b-modal size="lg" hide-footer centered id="my-modal" class="text-center">
      <img :src="imgOnModalGallery" alt="Imagen de oseznos"/>
    </b-modal>
  </div>
</template>

<script>
  import SiteHeader from "~/components/layout/SiteHeader";
  import SiteFooter from "~/components/layout/SiteFooter";

  export default {
    name: "galeria",
    components: {
      SiteHeader,
      SiteFooter
    },
    data() {
      return {
        imgOnModalGallery: '',
        showGallery: true,
        currentGallery: [],
        categorySelectorGallery: null,
        currentClicked: null,
        fullGallery: {
          id_1: [
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
            "gal-11.jpg",
            "gal-12.jpg",
            "gal-13.jpg",
            "gal-14.jpg",
            "gal-15.jpg",
            "gal-16.jpg",
            "gal-17.jpg",
            "gal-18.jpg",
            "gal-19.jpg",
            "gal-20.jpg",
            "gal-21.jpg",
            "gal-22.jpg",
            "gal-23.jpg",
            "gal-24.jpg",
            "gal-25.jpg",
            "gal-26.jpg",
            "gal-27.jpg",
            "gal-28.jpg",
            "gal-29.jpg",
            "gal-30.jpg",
            "gal-31.jpg",
            "gal-36.jpg",
            "gal-37.jpg",
            "gal-38.jpg",
            "gal-39.jpg",
            "gal-41.jpg",
            "gal-42.jpg",
            "gal-44.jpg",
            "gal-45.jpg",
            "gal-46.jpg",
            "gal-49.jpg",
            "gal-50.jpg",
            "gal-51.jpg",
            "gal-53.jpg",
            "gal-54.jpg",
            "gal-55.jpg",
            "gal-56.jpg",
            "gal-1.jpg",
            "gal-2.jpg",
            "gal-3.jpg",
            "gal-4.jpg",
          ],
          id_2: [
            "gal-20.jpg",
            "gal-21.jpg",
            "gal-22.jpg",
            "gal-23.jpg",
            "gal-24.jpg",
            "gal-25.jpg",
            "gal-26.jpg",
            "gal-27.jpg",
            "gal-28.jpg",
            "gal-29.jpg",
          ],
          id_3: [
            "gal-40.jpg",
            "gal-44.jpg",
            "gal-5.jpg",
            "gal-6.jpg",
            "gal-7.jpg",
            "gal-8.jpg",
            "gal-9.jpg",
            "gal-10.jpg",
            "gal-11.jpg",
          ],
          id_4: [
            "gal-47.jpg",
            "gal-45.jpg",
            "gal-32.jpg",
            "gal-33.jpg",
            "gal-34.jpg",
            "gal-35.jpg",
            "gal-48.jpg",
            "gal-43.jpg",
          ],
          id_5: [
            "gal-7.jpg",
            "gal-8.jpg",
            "gal-9.jpg",
            "gal-10.jpg",
            "gal-34.jpg",
            "gal-35.jpg",
            "gal-48.jpg",
            "gal-43.jpg",
          ]
        },
      }
    },
    methods: {
      SwitchToModal(el, evt) {
        let srcElement = null;
        srcElement = (el.target.children[0] !== undefined) ? el.target.children[0].currentSrc : el.target.currentSrc;
        this.imgOnModalGallery = srcElement;
        this.$bvModal.show("my-modal");
      },
      GetCurrentGallery(el, id) {
        if (id !== this.currentClicked) {
          // Clean the active class
          this.categorySelectorGallery.forEach(element => {
            // console.log(element);
            element.classList.remove('active')
          });
          // Set the active class
          el.target.classList.add('active');
          //
          this.showGallery = false;
          this.currentGallery = this.fullGallery[id];
          setTimeout(() => {
            this.showGallery = true
          }, 700);

          this.currentClicked = id;
        }
      }
    },
    mounted() {
      this.currentGallery = this.fullGallery.id_1;
      this.categorySelectorGallery = document.querySelectorAll('.category-selector');
    },
    head() {
      return {
        title: "Galería de highlights",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Galería de momentos de Oseznos, el equipo de fútbol americano infantil y juvenil para niños y niñas de Morelia y la mejor escuela para aprender fútbol americano."
          },
          {
            property: "og:description",
            content:
              "Galería de momentos de Oseznos, el equipo de fútbol americano infantil y juvenil para niños y niñas de Morelia y la mejor escuela para aprender fútbol americano.",
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
            content: "Oseznos de Morelia | Galería de highlights",
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
            content: "Oseznos de Morelia | Galería de highlights",
            vmid: "twitter:title"
          },
          {
            property: "twitter:description",
            content:
              "Galería de momentos de Oseznos, el equipo de fútbol americano infantil y juvenil para niños y niñas de Morelia y la mejor escuela para aprender fútbol americano.",
            vmid: "twitter:description"
          }
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all 1.5s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s linear;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
  }
</style>
