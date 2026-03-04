const Dashboard = {

  init() {
    this.renderCards();
    this.renderGrafico();
  },

  getData() {
    return Storage.getData();
  },

  calcularTotais() {

    const data = this.getData();

    let receitas = 0;
    let despesas = 0;

    data.fluxo.forEach(t => {
      if (t.tipo === "receita") receitas += t.valor;
      if (t.tipo === "despesa") despesas += t.valor;
    });

    const saldo = receitas - despesas;

    return { receitas, despesas, saldo };
  },

  renderCards() {

    const container = document.getElementById("dashboardCards");

    const totais = this.calcularTotais();

    container.innerHTML = `
      <div class="card">
        <h3>Receitas</h3>
        <p>R$ ${totais.receitas.toFixed(2)}</p>
      </div>

      <div class="card">
        <h3>Despesas</h3>
        <p>R$ ${totais.despesas.toFixed(2)}</p>
      </div>

      <div class="card">
        <h3>Saldo</h3>
        <p>R$ ${totais.saldo.toFixed(2)}</p>
      </div>
    `;
  },

  renderGrafico() {

    const totais = this.calcularTotais();

    const ctx = document.getElementById("graficoPatrimonio");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Receitas", "Despesas"],
        datasets: [{
          label: "Resumo Financeiro",
          data: [totais.receitas, totais.despesas],
          backgroundColor: ["#22c55e", "#ef4444"]
        }]
      }
    });

  }

};
