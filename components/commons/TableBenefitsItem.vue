<template>
  <div class="col-12 col-sm-6 col-lg-4 d-flex card-benefits p-4 py-5">
    <div class="col-3">
      <div class="px-0">
        <img class="img-fluid" :src="require('~/assets/img/svg/TableBenefits/'+ico)"
             :alt="'Valores Oseznos - '+mainTitle">
      </div>
    </div>
    <div class="col-9 col-text">
      <h3>{{mainTitle}}</h3>
      <p>
        {{description}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TableBenefitsItem",
    props:{
      ico:{
        type:String,
        default:'table-ico1.svg'
      },
      mainTitle:{
        type:String,
        default:'Trabajo en equipo'
      },
      description:{
        type: String,
        default:'Los jugadores desempeñan una función específica y son una pieza fundamental, por lo que desarrollarán la\n' +
          '        sinergia por medio de esfuerzo individual y colectivo.'
      }
    }
  }
</script>

<style scoped>

</style>
