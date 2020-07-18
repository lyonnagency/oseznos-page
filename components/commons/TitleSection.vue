<template>
  <div>
    <h2 class="d-flex justify-content-center">
      <span
        class="trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-5 line-overflow-purp line-overflow font-italic text-center">
        {{titleUp}}
      </span>
    </h2>
    <h2 class="ff-old-school-in-alt color-purple fs-60 line-height-1 text-center font-italic  ">
      <span class="">{{titleMain1}}</span>
      <span>{{titleMain2}}</span>
    </h2>
  </div>
</template>

<script>
  export default {
    name: "TitleSection",
    props: {
      titleUp: {
        type: String,
        default: 'Partidos'
      },
      titleMain1: {
        type: String,
        default: 'Partidos'
      },
      titleMain2: {
        type: String,
        default: 'Previos'
      },
    }
  }
</script>

<style scoped>

</style>
