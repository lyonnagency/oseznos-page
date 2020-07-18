<template>
  <ValidationObserver

    v-slot="{ handleSubmit }"
  >
    <form
      @submit.prevent="handleSubmit(sendMail)"
      class="d-flex flex-wrap"
      action="#"
      method="post"
    >
      <div class="col-12 d-flex flex-wrap px-sm-0">
        <div class="col-12 col-sm-12 col-lg-12 px-0 px-sm-2">
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
              class="input-oseznos"
              :class="classExtra"
            />
            <span :class="colorText" class="text-white ff-bebas fs-12">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="col-12 col-sm-12 col-lg-12 px-0 d-flex align-items-end flex-wrap">
          <ValidationProvider
            name="teléfono"
            :rules="{
              regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
              required: true
            }"
            v-slot="{ errors }"
            ref="phoneIn"
            class="col-md-6 col-12 px-0"
          >
            <input
              type="text"
              placeholder="Escribe tu teléfono"
              v-model="phoneOsezno"
              class="input-oseznos"
              :class="classExtra"
            />
            <span :class="colorText" class="text-white ff-bebas fs-12">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            name="correo"
            rules="email|required"
            v-slot="{ errors }"
            ref="mailIn"
            class="col-md-5 col-12 ml-md-4 px-0"
          >
            <input
              type="mail"
              v-model="mailOsezno"
              placeholder="Escribe tu correo"
              class="input-oseznos"
              :class="classExtra"
            />
            <span :class="colorText" class="text-white ff-bebas fs-12">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="col-12 mt-5 d-flex flex-wrap-reverse px-0 align-items-center">
        <div
          class="col-12 col-sm-7 col-md-6 col-lg-6 d-flex justify-content-center justify-content-sm-start py-2 px-0"
        >
          <span class="check-list mr-lg-3 mr-3 mr-sm-2"></span>
          <h3 :class="colorText" class="ff-bebas fs-18 text-white mb-0">
            Te enviaremos toda la información
          </h3>
        </div>
        <div
          class="col-12 col-sm-5 col-md-6 col-lg-5 d-flex justify-content-lg-end justify-content-center flex-wrap py-2"
        >
          <button type="submit" class="button-transparent">
            <span
              class="trapeze trapeze-yellow py-1 px-5 w-fit-content ff-bebas fs-18 px-5 line-overflow-purp line-overflow"
            >{{ msgButton }}</span
            >
          </button>
        </div>
        <span v-show="mailStatus" class="col-12 ff-bebas fs-18 text-white mt-2">
          Gracias por ponerte en contacto, nos comunicaremos a la brevedad
        </span>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
  export default {
    name: "ContactForm",
    props: {
      classExtra: {
        type: String,
        default: ''
      },
      colorText: {
        type: String,
        default: ''
      },
      formOrigin: {
        type: String,
        default: 'Contacto'
      }
    },
    methods: {
      async sendMail() {
        let mailData = {};
        this.mailStatus = false;
        mailData = {mail: this.mail};
        let formD = new FormData();
        formD.append("mail", this.mailOsezno);
        formD.append("name", this.nameOsezno);
        formD.append("phone", this.phoneOsezno);
        formD.append("form_origin", this.formOrigin);
        this.msgButton = "Enviando...";
        await this.$axios
          .$post("http://oseznos.com.mx/test.php", formD)
          .then(response => {
            console.log(response);
            if (response.code == 200) {
              this.mailStatus = true;
              this.mailOsezno = "";
              this.nameOsezno = "";
              this.phoneOsezno = "";
              this.$refs.nameIn.reset();
              this.$refs.mailIn.reset();
              this.$refs.phoneIn.reset();
              this.msgButton = "Registro";
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
        msgButton: "Registro"
      };
    }
  };
</script>

<style></style>
