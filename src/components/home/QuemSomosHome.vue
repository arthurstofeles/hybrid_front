<template>
  <div class="quem-somos" id="quem-somos">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="mb-10">
          <h2>Quem somos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            imperdiet interdum leo non ullamcorper. Cras tempor vitae ipsum et
            facilisis.
          </p>
        </v-col>
        <div class="colunas">
          <div class="perfil">
            <img src="@/assets/alex-norinho.png" alt="Alex Norinho" />
            <div>
              <h3>
                <a href="#" target="_blank">Alex Norinho</a>
              </h3>
              <p>
                CEO, Empresário, Engenheiro Civil da Eletrobras Furnas, com 13
                anos de experiênciano setor elétrico.
              </p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/sarita-molina.png" alt="Sarita Molina" />
            <div>
              <h3>
                <a href="#" target="_blank">Sarita Molina</a>
              </h3>
              <p>
                Analista de Sistemas e Cientista de Dados, com mais de 35 anos
                de experiência no setor elétrico.
              </p>
            </div>
          </div>
          <div class="perfil">
            <img src="@/assets/tiberio-duarte.png" alt="Tibério Duarte" />
            <div>
              <h3>
                <a href="#" target="_blank">Tibério Duarte</a>
              </h3>
              <p>
                Especialista em Inovação e Projetos da Eletrobras Chesf, com 12
                anos de experiência no setor elétrico.
              </p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/alex-campos.png" alt="Alex Campos" />
            <div>
              <h3>
                <a href="#" target="_blank">Alex Campos</a>
              </h3>
              <p>
                Gestor de Projetos de Energia na Eletrobras Furnas, com 18 anos
                de experiência no setor elétrico.
              </p>
            </div>
          </div>
          <div class="perfil">
            <img src="@/assets/antonio-augusto.png" alt="Antonio Augusto:" />
            <div>
              <h3>
                <a href="#" target="_blank">Antonio Augusto:</a>
              </h3>
              <p>
                Engenheiro na Eletrobras Holding, com mais de 35 anos de
                experiência no setor elétrico.
              </p>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "QuemSomosHome",
};
</script>

<style lang="scss" scoped>
.quem-somos {
  padding: 64px 0;
  background: #ebe3cc;
  h2 {
    text-transform: uppercase;
    color: #000;
    font-weight: 500;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
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
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 16px;
        @media screen and (max-width: 768px) {
          width: 80px;
          height: 80px;
        }
      }
      div {
        h3 {
          color: #000;
          font-weight: 500;
          font-size: 18px;
          line-height: 1.4;
          margin-bottom: 8px;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 4px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        }
        p {
          font-style: italic;
          font-weight: 300;
          font-size: 14px;
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
}
</style>
