<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome />
    <VantagensHome />
    <SimuladorHome
      :estados="estados"
      :cidades="cidades"
      :fonteGeracao="fonteGeracao"
      @buscar="buscarCidades($event)"
      @simular="simular"
    />
    <ContatoHome @contato="contato" />
    <QuemSomosHome />
    <FooterLayout />
    <AlertSuccess
      :dialog="sucess"
      :dialogMessage="message"
      dialogTextButton="OK"
      @close="sucess = false"
    />
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
import AlertSuccess from "@/components/custom/AlertSuccess";

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
    AlertSuccess,
  },
  data: () => ({
    estados: null,
    cidades: null,
    fonteGeracao: ["Hidráulica", "Térmica"],
    sucess: false,
    message: "Solicitação de contato enviada!",
  }),
  async created() {
    this.estados = await getEstados();
  },
  methods: {
    async buscarCidades(UF) {
      this.cidades = await getCidades(UF);
    },
    simular(e) {
      this.$store.dispatch("setForm", e);
      console.log(this.$store.state.form);
      this.$router.push({ path: "/simulador" });
    },
    contato() {
      this.sucess = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
}
</style>
