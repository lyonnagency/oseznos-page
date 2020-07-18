<template>
  <section class="space-section-bottom form-inscriptions">
    <div class="py-4 title-form torn-bg torn-bg-purple ">
      <div class="container2 d-flex justify-content-center px-md-3">
        <div class="col-12 col-sm-10 col-lg-8 d-flex align-items-center flex-wrap px-0">
          <img class="kid-player d-none d-sm-block" src="~/assets/img/kid-player.png"
               alt="Ozesnos Fútbol americano en Morelia">
          <h2 class="color-yellow font-italic ff-old-school-in-alt fs-96 mb-3 my-md-0 text-center">
            ¡ Inscripciones abiertas !
          </h2>
          <div class="col-12 d-flex align-items-center justify-content-center mt-3 flex-wrap">
            <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center justify-content-sm-end mb-4 mb-sm-0 px-0">
              <nuxt-link
                to="contact"
                class="text-center trapeze trapeze-yellow-neg ff-bebas fs-14 px-lg-4 px-5 px-sm-4 py-4 mx-2 4 line-overflow line-overflow-w">
                Solicita más información
              </nuxt-link>
            </div>
            <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center justify-content-sm-start  px-0">
              <a
                target="_blank"
                href="https://wa.me/5214433679536?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Club%20Oseznos"
                class="text-center trapeze trapeze-green ff-bebas px-lg-4 px-4 py-4 mx-2 fs-14">
                <img
                  src="~assets/img/svg/wats-on-button.svg"
                  alt="Whatsapp Ozesnos"
                  class="mr-2"/>
                Preguntar por whatsapp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="form container4 mt-5 pt-5 px-lg-5">
      <ValidationObserver
        class="col-12 col-md-10 mx-md-auto col-lg-11 d-flex align-items-center pr-0 px-0 py-5 my-4"
        v-slot="{ handleSubmit }">
        <div class="oseznos-face-floating">
        </div>
        <form
          @submit.prevent="handleSubmit(sendMail)"
          class="d-flex flex-wrap"
          action="#"
          method="post"
        >
          <div class="col-12 d-flex flex-wrap px-0">
            <div class="col-12 col-lg-6">
              <ValidationProvider
                name="nombre"
                rules="required|alpha_spaces"
                v-slot="{ errors }"
                ref="nameIn"
                class="w-100"
              >
                <input
                  type="text"
                  placeholder="Escribe tu nombre"
                  v-model="nameOsezno"
                  class="input-oseznos input-purple pl-4 pl-lg-0"
                />
                <span class="color-purple ff-bebas fs-12">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                name="Correo"
                rules="required|email"
                v-slot="{ errors }"
                ref="mailIn"
                class="w-100"
              >
                <input
                  type="text"
                  placeholder="Escribe tu correo"
                  v-model="mailOsezno"
                  class="input-oseznos input-purple pl-4 pl-lg-0"
                />
                <span class="color-purple ff-bebas fs-12">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-end flex-wrap">
              <ValidationProvider
                name="Nombre de jugador"
                rules="required|alpha_spaces"
                v-slot="{ errors }"
                ref="playerNameOsezno"
                class="w-100"
              >
                <input
                  type="text"
                  placeholder="Escribe tu nombre de jugador"
                  v-model="playerNameOsezno"
                  class="input-oseznos input-purple pl-4 pl-lg-0"
                />
                <span class="color-purple ff-bebas fs-12">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                name="teléfono"
                :rules="{
                    regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                    required: true
                 }"
                v-slot="{ errors }"
                ref="phoneIn"
                class="w-100"
              >
                <input
                  type="text"
                  v-model="phoneOsezno"
                  placeholder="Escribe tu teléfono"
                  class="input-oseznos input-purple pl-4 pl-lg-0"
                />
                <span class="color-purple ff-bebas fs-12">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="col-12 mt-5 d-flex flex-wrap px-0 align-items-center">
            <div class="d-none d-lg-flex col-12 col-sm-7 col-md-7 col-lg-6 justify-content-center justify-content-sm-start py-2 px-0 pl-3">
              <span class="check-list mr-lg-3 mr-3 mr-sm-2"></span>
              <h3 class="font-italic ff-bebas fs-18 color-purple mb-0">
                Me gustaría recibir novedades a mi correo
              </h3>
            </div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 d-flex justify-content-lg-end justify-content-center justify-content-sm-start flex-wrap py-2">
              <button type="submit" class="button-transparent">
                <span
                  class="font-italic trapeze trapeze-yellow py-1 w-fit-content ff-bebas fs-18 px-sm-5 px-4 line-overflow-purp line-overflow">
                  {{ msgButton }}
                </span>
              </button>
            </div>
            <div class="d-flex d-lg-none col-12 col-sm-7 col-md-7 col-lg-6 justify-content-center justify-content-sm-start  py-2 px-0 pl-3">
              <span class="check-list mr-lg-3 mr-3 mr-sm-2"></span>
              <h3 class="font-italic ff-bebas fs-18 color-purple mb-0">
                Me gustaría recibir novedades a mi correo
              </h3>
            </div>
            <span v-show="mailStatus" class="col-12 ff-bebas fs-18 color-purple mt-2">
                Gracias por ponerte en contacto, nos comunicaremos a la brevedad
              </span>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>

<script>
  export default {
    name: "FormInscription",
    methods: {
      async sendMail() {
        let mailData = {};
        this.mailStatus = false;
        mailData = {mail: this.mail};
        let formD = new FormData();
        formD.append("mail", this.mailOsezno);
        formD.append("name", this.nameOsezno);
        formD.append("namePlayer", this.playerNameOsezno);
        formD.append("phone", this.phoneOsezno);
        this.msgButton = "Enviando...";
        await this.$axios
          .$post("http://oseznos.com.mx/mailer-inscription.php", formD)
          .then(response => {
            console.log(response);
            if (response.code == 200) {
              this.mailStatus = true;
              this.mailOsezno = "";
              this.nameOsezno = "";
              this.playerNameOsezno = "";
              this.phoneOsezno = "";
              this.$refs.nameIn.reset();
              this.$refs.mailIn.reset();
              this.$refs.playerNameOsezno.reset();
              this.$refs.phoneIn.reset();
              this.msgButton = "Solicitar más informes a mi correo";
            }
          });
      }
    },
    data() {
      return {
        mailStatus: false,
        mailOsezno: "",
        nameOsezno: "",
        phoneOsezno: "",
        playerNameOsezno: "",
        msgButton: "Solicitar más informes a mi correo"
      };
    }
  }
</script>

<style scoped>

</style>
