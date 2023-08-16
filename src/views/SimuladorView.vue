<template>
  <div class="simulador">
    <img src="@/assets/logo-branco.svg" alt="" />
    <LoadingSimulador @loading="loading = false" v-if="loading" />
    <ResultadoSimulador
      v-else
      :receitaBrutaAtual="receitaBrutaAtual"
      :receitaBrutaHybrid="receitaBrutaHybrid"
      :novaGeracaoHybrid="novaGeracaoHybrid"
    />
  </div>
</template>

<script>
import LoadingSimulador from "@/components/simulador/LoadingSimulador";
import ResultadoSimulador from "@/components/simulador/ResultadoSimulador";
export default {
  name: "SimuladorView",
  components: { LoadingSimulador, ResultadoSimulador },
  data() {
    return {
      loading: true,
      valoresMW: {
        termoHridraulica: 184,
        solar: 260,
      },
      margenRisco: 0.8,
      horasInsolacao: 14,
      formData: {
        energiaMedia: 0,
        garantiaFisica: 0,
        potenciaInstalada: 0,
      },
      receitaBrutaAtual: 0,
      receitaBrutaHybrid: 0,
      novaGeracaoHybrid: 0,
    };
  },
  async created() {
    this.formData.energiaMedia = +this.$store.state.form.energiaMedia;
    this.formData.garantiaFisica = +this.$store.state.form.garantiaFisica;
    this.formData.potenciaInstalada = +this.$store.state.form.potenciaInstalada;
    console.log(this.formData);
    await this.calculo1();
    await this.calculo2();
    await this.calculo3();
  },
  methods: {
    calculo1() {
      const result =
        this.formData.energiaMedia * this.valoresMW.termoHridraulica * 8760;
      this.receitaBrutaAtual = result;
    },
    calculo2() {
      const calc1 = this.var2 * this.horasInsolacao * this.valoresMW.solar;
      const calc2 = calc1 / 24;
      const calc3 = calc2 * 8760 + this.receitaBrutaAtual;
      this.receitaBrutaHybrid = calc3;
    },
    calculo3() {
      const result = this.formData.garantiaFisica + this.var2;
      this.novaGeracaoHybrid = result;
    },
  },
  computed: {
    var1() {
      return this.formData.potenciaInstalada - this.formData.garantiaFisica;
    },
    var2() {
      return this.var1 * this.margenRisco;
    },
  },
};
</script>

<style lang="scss" scoped>
.simulador {
  background-color: #000;
  height: 100%;
  img {
    margin: 0 auto;
    display: flex;
    max-width: 150px;
    padding-top: 16px;
  }
}
</style>
