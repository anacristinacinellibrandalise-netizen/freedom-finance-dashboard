const App = {

  show(sectionId) {

    document.querySelectorAll(".section")
      .forEach(section => section.classList.add("hidden"));

    const target = document.getElementById(sectionId);

    if (target) {
      target.classList.remove("hidden");
    }

  }

};

window.onload = function () {

  if (typeof Dashboard !== "undefined") {
    Dashboard.init();
  }

  if (typeof Fluxo !== "undefined") {
    Fluxo.init();
  }

  if (typeof Investimentos !== "undefined") {
    Investimentos.init();
  }

  if (typeof Projecao !== "undefined") {
    Projecao.init();
  }

};
