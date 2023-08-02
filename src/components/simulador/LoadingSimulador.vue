<template>
  <div class="loading">
    <v-container>
      <h3>Calculando...</h3>
      <v-progress-linear
        rounded
        color="hy_green"
        height="25"
        v-model="value"
        :buffer-value="bufferValue"
      >
      </v-progress-linear>
      <p>Aguarde enquanto nossos robôs calculam seus ganhos para você.</p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LoadingSimulador",
  data() {
    return {
      value: 10,
      bufferValue: 100,
      intervalId: null,
    };
  },
  mounted() {
    this.startAdding();
  },
  beforeDestroy() {
    this.stopAdding();
  },
  methods: {
    startAdding() {
      this.intervalId = setInterval(() => {
        if (this.value < 100) {
          this.value += 5;
        } else {
          this.stopAdding();
        }
      }, 1000);
    },
    stopAdding() {
      this.$emit("loading");
      clearInterval(this.intervalId);
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  h3 {
    color: #51cd26;
    text-align: center;
    font-family: Inter, sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  p {
    color: #ebe3cc;
    text-align: center;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-top: 160px;
  }
}
</style>
