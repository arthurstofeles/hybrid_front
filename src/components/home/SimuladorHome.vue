<template>
  <div class="contato" id="simulador">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12"
          ><h2>Simulador</h2>
          <p>Abaixo, você pode simular os ganhos com a HYbrid.</p>
          <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
            <v-text-field
              v-model="formData.energy_medium_anual"
              label="Energia Média Anual"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="MW/h/m"
              v-mask="'###########'"
            ></v-text-field>
            <v-text-field
              v-model="formData.physical_guarantee"
              label="Garantia Física"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="MW/h"
              v-mask="'###########'"
            ></v-text-field>
            <v-text-field
              v-model="formData.installed_power"
              label="Potência Instalada"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="MW"
              v-mask="'###########'"
            ></v-text-field>
            <v-autocomplete
              v-model="formData.state"
              label="Estado"
              :items="estados"
              item-text="nome"
              item-value="sigla"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="Selecione o estado"
              @input="$emit('buscar', formData.state)"
            ></v-autocomplete>
            <v-autocomplete
              v-model="formData.city"
              label="Município"
              :items="cidades"
              item-text="nome"
              item-value="nome"
              required
              :rules="genericRules"
              color="hy_green"
              dark
              placeholder="Selecione o município"
              no-data-text="Nenhuma cidade encontrada"
            ></v-autocomplete>
            <v-select
              v-model="formData.generation_source"
              label="Fonte de Geração"
              :items="fonteGeracao"
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
    estados: {
      type: Array,
    },
    cidades: {
      type: Array,
    },
    fonteGeracao: {
      type: Array,
    },
  },
  data: () => ({
    formData: {
      energy_medium_anual: "",
      physical_guarantee: "",
      state: "",
      installed_power: "",
      generation_source: "",
      city: "",
    },
    valid: false,
    emailRules: [
      (v) => !!v || "Esse campo é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "Ensira um e-mail valido",
    ],
    genericRules: [(v) => !!v || "Esse campo é obrigatório"],
    loading: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    send() {
      if (this.formValid) {
        this.loading = true;
        this.$emit("simular", this.formData);
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
