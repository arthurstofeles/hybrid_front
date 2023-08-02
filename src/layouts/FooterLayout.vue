<template>
  <footer>
    <v-container>
      <v-row no-gutters>
        <div class="links">
          <div class="left">
            <h4>Fale com a gente</h4>
            <a>(21) 91111-1111</a>
            <br />
            <a href="mailto:subestacoesdigitais@gmail.com"
              >contato@hybrid.energy.com.br</a
            >
          </div>
          <div class="right">
            <div class="social">
              <v-btn icon>
                <v-icon color="#fff" large> mdi-linkedin </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: "FooterLayout",
};
</script>

<style lang="scss" scoped>
footer {
  background: #000;
  color: #fff;
  padding: 48px 0px;
  .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 16px;
    }
    a {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #fff;
    }
    .right {
      @media screen and (max-width: 768px) {
        text-align: right;
      }
    }
  }
  .social {
    @media screen and (max-width: 768px) {
      grid-column: 2;
      margin-top: 16px;
      justify-self: end;
    }
  }
}
</style>
