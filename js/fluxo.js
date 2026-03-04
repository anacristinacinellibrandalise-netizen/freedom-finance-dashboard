const Fluxo = {

  data: Storage.getData(),

  init() {
    this.render();
  },

  addReceita() {

    const descricao = document.getElementById("descricaoReceita").value;
    const valor = parseFloat(document.getElementById("valorReceita").value);
    const categoria = document.getElementById("categoriaReceita").value;
    const mes = document.getElementById("mesReceita").value;

    if(!descricao || !valor || !mes) return;

    this.data.fluxo.push({
      tipo: "receita",
      descricao,
      valor,
      categoria,
      mes
    });

    Storage.saveData(this.data);
    this.render();
  },

  addDespesa() {

    const descricao = document.getElementById("descricaoDespesa").value;
    const valor = parseFloat(document.getElementById("valorDespesa").value);
    const categoria = document.getElementById("categoriaDespesa").value;
    const mes = document.getElementById("mesDespesa").value;

    if(!descricao || !valor || !mes) return;

    this.data.fluxo.push({
      tipo: "despesa",
      descricao,
      valor,
      categoria,
      mes
    });

    Storage.saveData(this.data);
    this.render();
  },

  render() {

    const container = document.getElementById("fluxoContainer");

    container.innerHTML = `
      <h3>Nova Receita</h3>

      <input id="descricaoReceita" placeholder="Descrição">
      <input id="valorReceita" type="number" placeholder="Valor">
      <input id="mesReceita" type="month">

      <select id="categoriaReceita">
        <option>Salário</option>
        <option>Dividendos</option>
        <option>Rendimentos</option>
        <option>Recebimento PF</option>
      </select>

      <button onclick="Fluxo.addReceita()">Adicionar Receita</button>

      <hr>

      <h3>Nova Despesa</h3>

      <input id="descricaoDespesa" placeholder="Descrição">
      <input id="valorDespesa" type="number" placeholder="Valor">
      <input id="mesDespesa" type="month">

      <select id="categoriaDespesa">
        <option>Moradia</option>
        <option>Alimentação</option>
        <option>Transporte</option>
        <option>Lazer</option>
        <option>Saúde</option>
        <option>Educação</option>
      </select>

      <button onclick="Fluxo.addDespesa()">Adicionar Despesa</button>

      <hr>

      <h3>Transações</h3>

      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Mês</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          ${this.data.fluxo.map(t => `
            <tr>
              <td>${t.tipo}</td>
              <td>${t.descricao}</td>
              <td>${t.categoria}</td>
              <td>${t.mes}</td>
              <td>R$ ${t.valor}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;

  }

};
