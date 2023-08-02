<template>
  <div :class="{ onScroll: !topOfPage }">
    <header class="header">
      <img src="@/assets/logo.svg" alt="Logo" />
      <v-icon
        @click.stop="
          drawer = !drawer;
          $emit('open');
        "
        color="black"
        v-click-outside="onClickOutside"
        >mdi-menu</v-icon
      >
    </header>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      class="pa-2 hy_blue"
    >
      <nav class="nav">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.ancor">{{ link.title }}</a>
          </li>
        </ul>
      </nav>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile",
  props: {
    links: {
      type: Array,
      required: true,
    },
    topOfPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    onClickOutside() {
      this.$emit("open");
    },
  },
};
</script>

<style lang="scss" scoped>
.onScroll {
  background-color: #fff;
  box-shadow: 0 0 10px #aaa;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 16px;
  position: relative;
  z-index: 1;
  img {
    max-width: 150px;
  }
}
.nav {
  ul {
    list-style: none;
    padding: 16px;
    li {
      color: #000;
      margin-bottom: 16px;
      font-weight: 500;
      a {
        text-decoration: none;
        color: #000;
        transition: 0.3s;
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
