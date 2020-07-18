<template>
  <div class="title-section-left">
    <h3>
      <span
        class="trapeze py-1 pr-5 px-md-5 w-fit-content ff-bebas fs-18 px-3 line-overflow-purp line-overflow font-italic"
        :class="trapezeClass">
        {{trapezeTxt}}
      </span>
    </h3>
    <h2 class="ff-old-school-in-alt fs-60 line-height-1"
        :class="textColor">
      <span class="">{{mainTxt}}</span>
      <br/>
      <span>{{mainTxt2}}</span>
    </h2>
  </div>
</template>

<script>
  export default {
    name: "TitleSectionLeft",
    data() {
      return {
        trapezeClass: 'trapeze-yellow',
        textColor: 'text-white'
      }
    },
    props: {
      colorVersion: {
        type: String,
        default: 'on-purple'
      },
      trapezeTxt: {
        type: String,
        default: 'Los mejores'
      },
      mainTxt: {
        type: String,
        default: 'Misión'
      },
      mainTxt2: {
        type: String,
        default: ''
      }
    },
    mounted() {
      if (this.colorVersion === 'on-yellow') {
        this.trapezeClass = 'trapeze-purple';
        this.textColor = 'color-purple';
      } else if (this.colorVersion === 'on-white') {
        this.trapezeClass = 'trapeze-yellow';
        this.textColor = 'color-purple';
      }
    }
  }
</script>

<style scoped>

</style>
