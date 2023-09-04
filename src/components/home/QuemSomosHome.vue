<template>
  <div class="quem-somos" id="quem-somos">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="mb-10">
          <h2>Quem somos</h2>
          <p>
            O grupo de pesquisadores da HYbrid Energia , foi formado durante a
            segunda edição das Olímpiadas do Conhecimento do grupo Eletrobras,
            que é um torneio de inovação tecnológica promovido por Furnas .
            Inicialmente, a ideia era aproveitar as áreas ociosas pertencentes
            às usinas da empresa para instalar parques de geração solar
            fotovoltaica, conferindo a essas áreas uma utilidade atinente ao
            negócio de Furnas . No entanto, com a evolução das pesquisas, foram
            verificadas diversas outras oportunidades de melhoria . Assim, os
            estudos avançaram para incluir outros benefícios, tais como: aumento
            da capacidade instalada e da garantia física das usinas; otimização
            no aproveitamento da infraestrutura de transmissão já existente;
            melhora no nível de confiabilidade referente a energia assegurada,
            evitando a exposição ao mercado spot; expansão dentro dos critérios
            modernos da sustentabilidade; preservação do nível dos
            reservatórios, poupando o principal insumo e combustível de geração
            elétrica do Brasil: a água; e finalmente a eficiência na aplicação
            dos recursos financeiros disponíveis, ajudando a empresa a se tornar
            mais competitiva .
          </p>
          <p>
            Desse modo, os pesquisadores HYbrid identificaram e estudaram as
            oportunidades de melhoria descritas, aplicando os critérios de
            sustentabilidade e eficiência, e assim, conseguiram desenvolver, com
            pioneirismo, uma solução de hibridização da energia elétrica
            despachável com intermitente, inédita no mundo, e pronta para ir ao
            mercado e trazer benefícios para o conjunto da sociedade brasileira
            e para os parceiros .
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
                <a href="#" target="_blank">Antonio Augusto</a>
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
