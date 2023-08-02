<template>
  <div class="quem-somos">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="mb-10">
          <h2>Vantagens</h2>
          <p>
            As vantagens de um sistema híbrido de geração de energia são
            inúmeras. Da sustentabilidade ao aumento da receita, os aspectos
            técnicos e ambientais se beneficiam de diversas formas, como por
            exemplo:
          </p>
        </v-col>
        <div class="colunas">
          <div class="perfil">
            <img src="@/assets/icone-logo.svg" />
            <div>
              <h3>Confiabilidade</h3>
              <p>
                Otimização do uso da água no reservatório, garantindo uso
                sustentável do recurso hídrico (ou outra fonte primária de
                energia)
              </p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/icone-logo.svg" />
            <div>
              <h3>Infra Inteligente</h3>
              <p>
                Eliminação do custo com empreendimentos de transmissão
                (aproveita a infraestrutura já existente)
              </p>
            </div>
          </div>
          <div class="perfil">
            <img src="@/assets/icone-logo.svg" />
            <div>
              <h3>Confiabilidade</h3>
              <p>
                Ampliação da confiabilidade na operação do SIN, diminuindo o
                risco de desabastecimento de energia
              </p>
            </div>
          </div>
        </div>
      </v-row>
      <v-btn x-large rounded class="black--text px-10" color="hy_blue"
        >Saiba Mais</v-btn
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "VantagensHome",
};
</script>

<style lang="scss" scoped>
.quem-somos {
  padding: 64px 0;
  background: #ebe3cc;
  h2 {
    color: #000;
    font-weight: 500;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 16px;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: #000;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .colunas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 32px;
    width: 100%;
    margin-bottom: 32px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    .perfil {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 16px;
      @media screen and (max-width: 768px) {
        flex-direction: row;
        text-align: left;
        margin-bottom: 32px;
      }
      img {
        margin-bottom: 16px;
      }
      div {
        h3 {
          color: #000;
          font-weight: 500;
          font-size: 24px;
          line-height: 1.4;
          margin-bottom: 8px;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 4px;
          }
        }
        p {
          font-weight: 300;
          font-size: 18px;
          line-height: 1.4;
          @media screen and (max-width: 768px) {
            font-size: 12px;
          }
        }
      }
    }
    .left {
      @media screen and (max-width: 768px) {
        flex-direction: row-reverse;
        text-align: right;
      }
    }
  }
  button {
    display: flex;
    margin: 0 auto;
  }
}
</style>
