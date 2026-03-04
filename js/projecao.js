const Projecao = {

  init() {
    this.render();
  },

  calcular() {

    const aporte = parseFloat(document.getElementById("aporteMensal").value);
    const taxa = parseFloat(document.getElementById("taxaAnual").value) / 100;
    const anos = parseFloat(document.getElementById("anos").value);

    if(!aporte || !taxa || !anos) return;

    let total = 0;

    for(let i = 0; i < anos * 12; i++) {
      total = (total + aporte) * (1 + taxa / 12);
    }

    document.getElementById("resultadoProjecao").innerHTML = `
      <h3>Patrimônio projetado</h3>
      <p>R$ ${total.toFixed(2)}</p>
    `;

  },

  render() {

    const container = document.getElementById("projecaoContainer");

    container.innerHTML = `

      <h3>Simulador de Liberdade Financeira</h3>

      <label>Aporte mensal</label><br>
      <input id="aporteMensal" type="number" placeholder="Ex: 1000"><br><br>

      <label>Rentabilidade anual (%)</label><br>
      <input id="taxaAnual" type="number" placeholder="Ex: 10"><br><br>

      <label>Prazo (anos)</label><br>
      <input id="anos" type="number" placeholder="Ex: 20"><br><br>

      <button onclick="Projecao.calcular()">Calcular projeção</button>

      <div id="resultadoProjecao" style="margin-top:20px;"></div>

    `;

  }

};
