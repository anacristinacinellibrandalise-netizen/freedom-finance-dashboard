const Investimentos = {

  data: Storage.getData(),

  init() {
    this.render();
  },

  addRendaFixa() {

    const nome = document.getElementById("rfNome").value;
    const valor = parseFloat(document.getElementById("rfValor").value);

    if(!nome || !valor) return;

    this.data.rendaFixa.push({
      nome,
      valor
    });

    Storage.saveData(this.data);
    this.render();
  },

  addRendaVariavel() {

    const ativo = document.getElementById("rvAtivo").value;
    const valor = parseFloat(document.getElementById("rvValor").value);

    if(!ativo || !valor) return;

    this.data.rendaVariavel.push({
      ativo,
      valor
    });

    Storage.saveData(this.data);
    this.render();
  },

  addCripto() {

    const ativo = document.getElementById("criptoAtivo").value;
    const valor = parseFloat(document.getElementById("criptoValor").value);

    if(!ativo || !valor) return;

    this.data.cripto.push({
      ativo,
      valor
    });

    Storage.saveData(this.data);
    this.render();
  },

  render() {

    const container = document.getElementById("investimentosContainer");

    container.innerHTML = `

      <h3>Renda Fixa</h3>

      <input id="rfNome" placeholder="Tipo (CDB, Tesouro)">
      <input id="rfValor" type="number" placeholder="Valor investido">

      <button onclick="Investimentos.addRendaFixa()">Adicionar</button>

      <ul>
        ${this.data.rendaFixa.map(i => `
          <li>${i.nome} — R$ ${i.valor}</li>
        `).join("")}
      </ul>

      <hr>

      <h3>Renda Variável</h3>

      <input id="rvAtivo" placeholder="Ativo (Ação, FII)">
      <input id="rvValor" type="number" placeholder="Valor investido">

      <button onclick="Investimentos.addRendaVariavel()">Adicionar</button>

      <ul>
        ${this.data.rendaVariavel.map(i => `
          <li>${i.ativo} — R$ ${i.valor}</li>
        `).join("")}
      </ul>

      <hr>

      <h3>Criptomoedas</h3>

      <input id="criptoAtivo" placeholder="Cripto (BTC, ETH)">
      <input id="criptoValor" type="number" placeholder="Valor investido">

      <button onclick="Investimentos.addCripto()">Adicionar</button>

      <ul>
        ${this.data.cripto.map(i => `
          <li>${i.ativo} — R$ ${i.valor}</li>
        `).join("")}
      </ul>

    `;

  }

};
