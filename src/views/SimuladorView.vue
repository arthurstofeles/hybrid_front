<template>
  <div class="simulador">
    <img src="@/assets/logo-branco.svg" alt="" />
    <LoadingSimulador @loading="loading = false" v-if="loading" />
    <ResultadoSimulador
      v-else
      :receitaBrutaAtual="receitaBrutaAtual"
      :receitaBrutaHybrid="receitaBrutaHybrid"
      :novaGeracaoHybrid="novaGeracaoHybrid"
      :diferencaPercentual="diferencaPercentual"
    />
  </div>
</template>

<script>
import LoadingSimulador from "@/components/simulador/LoadingSimulador";
import ResultadoSimulador from "@/components/simulador/ResultadoSimulador";
import { getParams } from "../utils/services";

export default {
  name: "SimuladorView",
  components: { LoadingSimulador, ResultadoSimulador },
  data() {
    return {
      loading: true,
      valoresMW: {
        termoHridraulica: null,
        solar: null,
      },
      margenRisco: null,
      horasInsolacao: null,
      formData: {
        energiaMedia: 0,
        garantiaFisica: 0,
        potenciaInstalada: 0,
      },
      receitaBrutaAtual: 0,
      receitaBrutaHybrid: 0,
      novaGeracaoHybrid: 0,
      diferencaPercentual: 0,
      params: null,
    };
  },
  async created() {
    if (!this.$store.state.simulador) {
      this.$router.push({ path: "/" });
    }

    this.params = await getParams();
    if (this.params.length) {
      this.valoresMW.solar = +this.params[0].value;
      this.valoresMW.termoHridraulica = +this.params[1].value;
      this.margenRisco = +this.params[2].value;
      this.horasInsolacao = +this.params[3].value;

      this.formData.energiaMedia = +this.$store.state.form.energy_medium_anual;
      this.formData.garantiaFisica = +this.$store.state.form.physical_guarantee;
      this.formData.potenciaInstalada = +this.$store.state.form.installed_power;

      await this.calculo1();
      await this.calculo2();
      await this.calculo3();
      this.diferencaPercentual = await this.diferenca();

      this.$store.dispatch("setCalc", {
        receitaBrutaAtual: this.receitaBrutaAtual,
        receitaBrutaHybrid: this.receitaBrutaHybrid,
        novaGeracaoHybrid: this.novaGeracaoHybrid,
        diferencaPercentual: this.diferencaPercentual,
      });
    }
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
    diferenca() {
      const dif = (this.receitaBrutaHybrid * 100) / this.receitaBrutaAtual;
      return dif - 100;
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
