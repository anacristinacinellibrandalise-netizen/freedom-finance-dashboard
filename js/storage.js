const Storage = {

  getData() {
    const data = localStorage.getItem("financeData");
    return data ? JSON.parse(data) : {
      fluxo: [],
      rendaFixa: [],
      rendaVariavel: [],
      cripto: []
    };
  },

  saveData(data) {
    localStorage.setItem("financeData", JSON.stringify(data));
  }

};
