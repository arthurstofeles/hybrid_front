<template>
  <div class="resultado">
    <div class="bar">
      <h3>RESULTADO DA SIMULAÇÃO</h3>
    </div>
    <v-container>
      <p>
        Considerando os seguintes parâmetros: Energia Média Anual: 50 MW/h/m |
        Garantia Física: 20 MW/h | Potência Instalada: 40 MW Estado: Rio de
        Janeiro | Município: Niterói | Fonte de Geração: Térmica
      </p>
      <!-- <h2>R$ 80.592.000,00</h2> -->
      <h2>{{ formatoMoeda(receitaBrutaAtual) }}</h2>
      <p>ESTIMATIVA RECEITA BRUTA ATUAL (ANUAL, SEM HYBRID)</p>
      <div class="numbers">
        <div>
          <!-- <h2>36 MW</h2> -->
          <h2>{{ novaGeracaoHybrid }}</h2>
          <p>NOVA GERAÇÃO <span>COM HYBRID</span></p>
        </div>
        <div>
          <!-- <h2>R$ 101.849.600,00</h2> -->
          <h2>{{ formatoMoeda(receitaBrutaHybrid) }}</h2>
          <p>ESTIMATIVA RECEITA <span>BRUTA COM HYBRID</span> (ANUAL)</p>
        </div>
        <div>
          <h2>+ {{ diferenca.toFixed() }}%</h2>
          <p>GANHO PERCENTUAL COMPARATIVO</p>
        </div>
      </div>
      <div class="mt-10 d-flex justify-space-between">
        <v-btn rounded outlined class="black--text mr-6" color="hy_green" to="/"
          >Voltar</v-btn
        >
        <v-btn rounded class="black--text" color="hy_green" to="/contato"
          >Receber por e-mail</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ResultadoSimulador",
  props: {
    receitaBrutaAtual: {
      type: Number,
    },
    receitaBrutaHybrid: {
      type: Number,
    },
    novaGeracaoHybrid: {
      type: Number,
    },
  },
  computed: {
    diferenca() {
      const dif = (this.receitaBrutaHybrid * 100) / this.receitaBrutaAtual;
      return dif - 100;
    },
  },
  methods: {
    formatoMoeda(valor) {
      const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return formatter.format(valor);
    },
  },
};
</script>
<style lang="scss" scoped>
.resultado {
  .bar {
    background: #51cd26;
    padding: 8px;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
    h3 {
      color: #000;
      text-align: center;
      font-family: Inter, sans-serif;
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
  }
  p {
    color: #ebe3cc;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 400;
  }
  h2 {
    color: #ebe3cc;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
  .numbers {
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 32px;
    @media screen and (max-width: 920px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
    }
    h2 {
      color: #51cd26;
      font-family: Inter, sans-serif;
      font-size: 36px;
      font-weight: 500;
    }
    p {
      color: #ebe3cc;
      font-family: Inter, sans-serif;
      font-size: 14px;
      font-weight: 400;
      span {
        color: #51cd26;
      }
    }
  }
}
</style>
