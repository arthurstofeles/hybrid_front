<template>
  <div :class="{ onScroll: !topOfPage }">
    <header class="header">
      <nav>
        <img src="@/assets/logo.svg" alt="Logo" />
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a
              :href="link.ancor"
              v-smooth-scroll="{
                duration: 1000,
                updateHistory: false,
                offset: -70,
              }"
              >{{ link.title }}</a
            >
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderDesktop",
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
  padding: 24px;
  position: relative;
  z-index: 1;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    img {
      max-width: 200px;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      list-style: none;
      gap: 24px;
      li {
        color: #000;
        font-weight: 500;
        a {
          text-decoration: none;
          color: #000;
          transition: 0.3s;
          &:hover {
            color: #26a5cd;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
