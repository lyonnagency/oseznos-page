<template>
  <div class="d-flex card-match flex-wrap justify-content-center">
    <div class="title col-12 d-flex justify-content-center ">
      <h2 class="d-flex justify-content-center">
      <span
        class="trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-5 line-overflow-purp line-overflow font-italic text-center">
        {{fecha}}
      </span>
      </h2>
    </div>
    <div class="body-card col-12 d-flex justify-content-center align-items-center px-sm-0">
      <div class="logo-1 logo">
        <img :src="require('../../assets/img/svg/'+ teamLogoLocal)" alt="">
      </div>
      <div class="result">
        <h3 class="ff-old-school-in-alt color-purple fs-60">
          {{localTeam}} - {{visitTeam}}
        </h3>
      </div>
      <div class="logo-2 logo"><img :src="require('../../assets/img/svg/'+ teamLogoVisit)" alt=""></div>
    </div>
    <div class="leage col-12 text-center">
      <h3 class="ff-bebas fs-18 color-purple">{{league}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardMatch",
    props: {
      localTeam: {
        type: String,
        default: '12'
      },
      visitTeam: {
        type: String,
        default: '20'
      },
      league: {
        type: String,
        default: 'Liga kids'
      },
      teamLogoLocal: {
        type: String,
        default: 'header-logo.svg'
      },
      teamLogoVisit: {
        type: String,
        default: 'header-logo.svg'
      },
      fecha: {
        type: String,
        default: 'Dic, 20, 19'
      },
    }
  }
</script>

<style scoped>

</style>
