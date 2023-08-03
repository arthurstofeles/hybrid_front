<template>
  <div class="contato" id="simulador">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12"
          ><h2>Simulador</h2>
          <p>Abaixo, você pode simular os ganhos com a HYbrid.</p>
          <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
            <v-text-field
              v-model="formData.energiaMedia"
              label="Energia Média Anual"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="MW/h/m"
            ></v-text-field>
            <v-text-field
              v-model="formData.garantiaFisica"
              label="Garantia Física"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="MW/h"
            ></v-text-field>
            <v-text-field
              v-model="formData.potenciaInstalada"
              label="Potência Instalada"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="MW"
            ></v-text-field>
            <v-autocomplete
              v-model="formData.estado"
              label="Estado"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="Selecione o estado"
            ></v-autocomplete>
            <v-autocomplete
              v-model="formData.municipio"
              label="Município"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="Selecione o município"
            ></v-autocomplete>
            <v-select
              v-model="formData.fonteGeracao"
              label="Fonte de Geração"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="Selecione a fonte de geração"
            ></v-select>
          </v-form>
        </v-col>
        <v-btn
          x-large
          rounded
          class="enviar black--text mt-6 px-10"
          color="#51CD26"
          @click="send"
          :loading="loading"
          >Calcular</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SimuladorHome",
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
  background: #000;
  padding-top: 64px;
  padding-bottom: 16px;
  .row {
    position: relative;
    padding-bottom: 32px;
  }
  h2 {
    text-transform: uppercase;
    color: #51cd26;
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
    color: #51cd26;
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
