<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome />
    <VantagensHome />
    <SimuladorHome />
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
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
}
</style>
