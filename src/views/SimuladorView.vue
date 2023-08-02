<template>
  <div class="simulador">
    <img src="@/assets/logo-branco.svg" alt="" />
    <LoadingSimulador @loading="loading = false" v-if="loading" />
    <ResultadoSimulador v-else />
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
    };
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
