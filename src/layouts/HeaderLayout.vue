<template>
  <div class="fixed-header" :class="{ opened: opened }">
    <HeaderMobile
      :links="links"
      v-if="isMobile"
      @open="opened = !opened"
      :topOfPage="topOfPage"
    />
    <HeaderDesktop :links="links" v-else :topOfPage="topOfPage" />
  </div>
</template>

<script>
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import HeaderDesktop from "@/components/header/HeaderDesktop.vue";
export default {
  name: "HeaderLayout",
  components: {
    HeaderMobile,
    HeaderDesktop,
  },
  data: () => ({
    isMobile: false,
    links: [
      {
        title: "HOME",
        ancor: "#banner",
      },
      {
        title: "VANTAGENS",
        ancor: "#vantagens",
      },
      {
        title: "SIMULADOR",
        ancor: "#simulador",
      },
      {
        title: "QUEM SOMOS",
        ancor: "#quem-somos",
      },
      {
        title: "CONTATO",
        ancor: "#contato",
      },
    ],
    topOfPage: true,
    opened: false,
  }),
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 900;
    });
    this.isMobile = window.innerWidth <= 900;
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 100) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
    teste() {
      console.log("oi");
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.fixed-header {
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  &.opened {
    height: 100%;
    background: transparent;
  }
}
</style>
