<template>
  <div>
<!--    <TitleSection titleUp="Bienvenido" titleMain1="¿Qué aprenderás?" titleMain2=""></TitleSection>-->
    <div class="d-flex flex-wrap container3 mt-5">
      <TableBenefitsItem class="border-right-dashed border-bottom-dashed">
      </TableBenefitsItem>
      <TableBenefitsItem
        mainTitle="Fomenta la amistad"
        description="Desarrollamos el compañerismo tanto al compartir una victoria como una derrota, pues en este deporte se privilegia la unidad."
        ico="table-ico2.svg" class="border-right-dashed border-bottom-dashed border-right-sm-none border-right-lg-dashed">
      </TableBenefitsItem>
      <TableBenefitsItem
        mainTitle="Mejoramiento físico y mental"
        description="Desarrolla fuerza y fortalece los músculos. Logra un buen funcionamiento cardiovascular mejorando la velocidad y resistencia. Mejora la concentración y libera el estrés."
        ico="table-ico3.svg" class="border-bottom-dashed border-right-sm-dashed ">
      </TableBenefitsItem>
      <TableBenefitsItem
        mainTitle="Mentalidad estratégica"
        description="Brinda agilidad, capacidad de planear, actuar y evaluar distintas problemáticas que se puedan generar en una estrategia de juego. "
          ico="table-ico4.svg" class="border-right-dashed border-bottom-dashed-xs border-right-sm-none border-bottom-dashed-sm border-right-lg-dashed">
      </TableBenefitsItem>
      <TableBenefitsItem
        mainTitle="Juega en las mejores ligas"
        description="Jugamos con las mejores ligas de México y con los mejores equipos."
        ico="table-ico5.svg" class="border-right-dashed border-bottom-dashed-xs">
      </TableBenefitsItem>
      <TableBenefitsItem
        mainTitle="Convenios con universidades"
        description="Nos juntamos con las mejores universidades para buscar las mejores oportunidades académicas."
        ico="table-ico6.svg">
      </TableBenefitsItem>
    </div>
  </div>
</template>

<script>
  import TitleSection from "~/components/commons/TitleSection";
  import TableBenefitsItem from "~/components/commons/TableBenefitsItem";

  export default {
    name: "TableBenefits",
    components: {
      TitleSection,
      TableBenefitsItem
    }
  }
</script>

<style scoped>

</style>
