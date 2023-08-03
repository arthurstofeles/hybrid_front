<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome />
    <VantagensHome />
    <SimuladorHome
      :estados="estados"
      :cidades="cidades"
      @buscar="buscarCidades($event)"
    />
    <ContatoHome />
    <QuemSomosHome />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "../layouts/HeaderLayout";
import BannerHome from "../components/home/BannerHome";
import VantagensHome from "../components/home/VantagensHome";
import SimuladorHome from "../components/home/SimuladorHome";
import ContatoHome from "../components/home/ContatoHome";
import QuemSomosHome from "../components/home/QuemSomosHome";
import FooterLayout from "../layouts/FooterLayout";

import { getEstados, getCidades } from "../utils/services";

export default {
  name: "HomeView",
  components: {
    HeaderLayout,
    BannerHome,
    VantagensHome,
    SimuladorHome,
    ContatoHome,
    QuemSomosHome,
    FooterLayout,
  },
  data: () => ({
    estados: null,
    cidades: null,
  }),
  async created() {
    this.estados = await getEstados();
  },
  methods: {
    async buscarCidades(UF) {
      this.cidades = await getCidades(UF);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
}
</style>
