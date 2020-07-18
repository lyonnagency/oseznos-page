<template>
  <div class="space-section-bottom">
    <div class="d-flex justify-content-center flex-wrap container2">
      <TitleSection></TitleSection>
      <div class="col-12 d-flex mt-5 flex-wrap px-0">
        <div class="col-12 col-sm-6 col-lg-4 my-4 my-md-0 px-0 px-md-2 px-lg-3">
          <CardMatch teamLogoVisit="rival-2.svg" fecha="Dic 9, 19"></CardMatch>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 my-4 my-md-3 px-0 px-md-2 px-lg-3 line-left line-right">
          <CardMatch teamLogoVisit="rival-3.svg" fecha="Dic 16, 19"></CardMatch>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 my-4 my-md-3 px-0 px-md-2 px-lg-3">
          <CardMatch teamLogoVisit="rival-4.svg" fecha="Dic 23, 19"></CardMatch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleSection from "./TitleSection";
  import CardMatch from "./CardMatch";
  export default {
    name: "PreviusGames",
    components: {
      TitleSection,
      CardMatch
    }
  }
</script>

<style scoped>

</style>
