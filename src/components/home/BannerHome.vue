<template>
  <div class="banner">
    <div>
      <h1>Energia Híbrida Inteligente</h1>
      <p>
        Benefícios e Proposta Única de Venda (Unique Selling Proposition - USP)
      </p>
      <v-btn x-large rounded class="black--text px-10" color="hy_yellow"
        >Simular</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerHome",
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 160px 24px;
  position: relative;
  // top: -72px;
  background-image: url("../../assets/banner-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  div {
    position: relative;
    z-index: 1;
    h1 {
      color: #000;
      font-family: "Inter", sans-serif;
      font-size: 64px;
      font-weight: 600;
      @media screen and (max-width: 900px) {
        font-size: 40px;
      }
    }
    p {
      color: #26a5cd;
      font-family: "Inter", sans-serif;
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 48px;
      @media screen and (max-width: 900px) {
        font-size: 14px;
        margin-bottom: 160px;
      }
    }
    button {
      @media screen and (max-width: 900px) {
        display: flex;
        margin: 0 auto;
      }
    }
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      #ebe3cc 33%,
      rgba(235, 227, 204, 0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 900px) {
    // top: -56px;
    padding: 160px 16px 96px 16px;
  }
}
</style>
