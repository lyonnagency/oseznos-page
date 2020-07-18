<template>
  <div class="slider-item h-100">
    <div class="container1 d-flex h-100 flex-wrap">
      <div class="col-12 px-0 col-md-11 d-flex align-items-center flex-wrap mt-md-4">
        <div class="d-flex flex-wrap mb-4 pb-4 mb-sm-0 pb-sm-0">
          <div class="col-12 px-0">
            <h1 class="trapeze trapeze-purple ff-bebas fs-22 py-lg-2 py-1 my-1 my-md-0 px-4 ">
              Club de fútbol americano de Morelia
            </h1>
          </div>
          <div class="col-12 px-0">
            <h2 class="ff-old-school-in-alt font-italic color-purple my-lg-1 my-0 fs-87">
              <div class="d-block d-sm-none main-text-hero">
                <span class="trapeze trapeze-yellow px-md-4 px-0 my-lg-3 my-1 py-0 w-fit-content">{{titleLg1}}</span>
                <span class="trapeze trapeze-yellow px-4 my-md-3 my-1 py-0 ">
                    <span class="w-100"> {{titleLg2}}</span>
                </span>
<!--                <span class="trapeze trapeze-yellow px-4 my-md-3 my-1 py-0 fs-72 justify-content-">-->
<!--                  <span class="w-100">sé un osezno</span>-->
<!--                </span>-->
              </div>
              <div class="d-sm-block d-none ">
                <span class="trapeze trapeze-yellow px-md-4 px-2 my-2 py-0 w-fit-content main-text-hero">
                  {{titleLg1}}
                </span>
                <span class="trapeze trapeze-yellow px-4 my-2 py-0 ">
                  {{titleLg2}}
                </span>
              </div>
            </h2>
          </div>
          <nuxt-link
            to="registro"
            class="trapeze trapeze-purple ff-bebas fs-18 line-overflow line-overflow-yellow px-lg-5 px-4 py-3 my-1 my-md-2">
            Únete al club
          </nuxt-link
          >
        </div>
      </div>
    </div>
    <span :class="bgImg" class="player"></span>
  </div>
</template>

<script>
  export default {
    name: "SliderItem",
    props: {
      bgImg: {
        type: String,
        default: 'player-1'
      },
      titleLg1: {
        type: String,
        default: 'Tienes garra'
      },
      titleLg2: {
        type: String,
        default: 'Sé campeón, sé osezno'
      }
    }
  }
</script>

<style scoped>

</style>
