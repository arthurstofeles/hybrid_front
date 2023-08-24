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
    <ContatoHome @contato="contato" :loading="loadingBtn" :sucess="sucess" />
    <QuemSomosHome />
    <FooterLayout />
    <AlertSuccess
      :dialog="sucess"
      :dialogMessage="message"
      dialogTextButton="OK"
      @close="sucess = false"
    />
    <AlertError :alertError="error" :messageError="message" />
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
import AlertError from "@/components/custom/AlertError";

import {
  getEstados,
  getCidades,
  sendContato,
  sendSimulacao,
} from "../utils/services";

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
    AlertError,
  },
  data: () => ({
    estados: null,
    cidades: null,
    fonteGeracao: ["Hidráulica", "Térmica"],
    sucess: false,
    error: false,
    message: "",
    loadingBtn: false,
    params: null,
  }),
  async created() {
    this.estados = await getEstados();
  },
  methods: {
    async buscarCidades(UF) {
      this.cidades = await getCidades(UF);
    },
    async simular(e) {
      await sendSimulacao(e).then(() => {
        this.$store.dispatch("setForm", e);
        this.$store.dispatch("setSimulador", true);
        this.$router.push({ path: "/simulador" });
      });
    },
    async contato(e) {
      this.error = false;
      this.loadingBtn = true;
      try {
        await sendContato(e).then(() => {
          this.loadingBtn = false;
          this.message = "Solicitação de contato enviada!";
          this.sucess = true;
        });
      } catch (e) {
        this.loadingBtn = false;
        this.message = "Ocorreu um erro inesperado";
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
}
</style>
