<template>
  <div class="contato" id="contato">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12"
          ><h2>Contato</h2>
          <p>
            Se quiser saber mais sobre a nossa proposta, deixe seu e-mail ou
            telefone que entraremos em contato. Caso prefira, também pode nos
            contatar diretamente
          </p>
          <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
            <v-text-field
              v-model="formData.nome"
              label="Nome"
              required
              :rules="genericRules"
              color="black"
              placeholder="Insira seu nome aqui"
            ></v-text-field>
            <v-text-field
              v-model="formData.email"
              label="E-mail"
              required
              :rules="emailRules"
              color="black"
              placeholder="Insira seu e-mail"
            ></v-text-field>
            <v-text-field
              v-model="formData.phone"
              label="Telefone"
              required
              :rules="genericRules"
              color="black"
              placeholder="(xx) xxxxx-xxxx"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-btn
          x-large
          rounded
          class="enviar black--text mt-6 px-10"
          color="hy_yellow"
          @click="send"
          :loading="loading"
          >Solicitar</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ContatorHome",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    formData: {
      energiaMedia: "",
      garantiaFisica: "",
      potenciaInstalada: "",
      estado: "",
      municipio: "",
      fonteGeracao: "",
    },
    valid: false,
    emailRules: [
      (v) => !!v || "Esse campo é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "Ensira um e-mail valido",
    ],
    genericRules: [(v) => !!v || "Esse campo é obrigatório"],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    send() {
      if (this.formValid) {
        this.$emit("contato", this.formData);
      }
    },
    reset() {
      this.formData.phone = "";
      this.formData.email = "";
      this.$refs.form.reset();
    },
  },
  computed: {
    formValid() {
      return this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
.contato {
  background: #26a5cd;
  padding-top: 64px;
  padding-bottom: 16px;
  .row {
    position: relative;
    padding-bottom: 16px;
  }
  h2 {
    text-transform: uppercase;
    color: #ffc30d;
    font-weight: 400;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .enviar {
    display: flex;
    margin: 0 auto;
  }
}
</style>
