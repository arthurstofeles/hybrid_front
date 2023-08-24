<template>
  <div class="contato">
    <img src="@/assets/logo-branco.svg" alt="" />
    <v-container class="mt-8">
      <v-row no-gutters>
        <v-col cols="12">
          <v-form ref="form" v-model="valid" lazy-validation class="mb-8">
            <v-text-field
              v-model="formData.name"
              label="Nome"
              required
              :rules="genericRules"
              color="hy_green"
              placeholder="Insira seu nome aqui"
              dark
            ></v-text-field>
            <v-text-field
              v-model="formData.email"
              label="E-mail"
              required
              :rules="emailRules"
              color="hy_green"
              placeholder="Insira seu e-mail"
              dark
            ></v-text-field>
            <v-text-field
              v-model="formData.phone"
              label="Telefone"
              required
              :rules="genericRules"
              color="hy_green"
              placeholder="(xx) xxxxx-xxxx"
              v-mask="'(##) #####-####'"
              dark
            ></v-text-field>
          </v-form>
        </v-col>
        <v-btn
          x-large
          rounded
          class="enviar black--text mt-6 px-10"
          color="hy_green"
          @click="contato"
          :loading="loadingBtn"
          >Receber por E-mail</v-btn
        >
      </v-row>
    </v-container>
    <AlertSuccess
      :dialog="sucess"
      :dialogMessage="message"
      dialogTextButton="OK"
      @close="$router.push({ path: '/' })"
    />
    <AlertError :alertError="error" :messageError="message" />
  </div>
</template>

<script>
import AlertSuccess from "@/components/custom/AlertSuccess";
import AlertError from "@/components/custom/AlertError";

import { sendContato } from "../utils/services";

export default {
  name: "ContatoView",
  components: {
    AlertSuccess,
    AlertError,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    formData: {
      name: "",
      email: "",
      phone: "",
    },
    valid: false,
    emailRules: [
      (v) => !!v || "Esse campo é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "Ensira um e-mail valido",
    ],
    genericRules: [(v) => !!v || "Esse campo é obrigatório"],
    sucess: false,
    error: false,
    message: "",
    loadingBtn: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async contato() {
      if (this.formValid) {
        this.error = false;
        this.loadingBtn = true;
        try {
          await sendContato(this.formData).then(() => {
            this.loadingBtn = false;
            this.message = "Solicitação de contato enviada!";
            this.sucess = true;
          });
        } catch (e) {
          this.loadingBtn = false;
          this.message = "Ocorreu um erro inesperado";
          this.error = true;
        }
      }
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
img {
  margin: 0 auto;
  display: flex;
  max-width: 150px;
  padding-top: 16px;
}
.contato {
  background: #000;
  height: 100%;
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
