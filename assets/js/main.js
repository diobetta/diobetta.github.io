(function () {
  "use strict";

  // Inicializa AOS para manter transições suaves ao rolar a página.
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80
    });
  }

  // Inicializa GLightbox para abrir imagens dos projetos em tela maior.
  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true
    });
  }

  // Fecha a navbar mobile automaticamente após clicar em um link.
  const navLinks = document.querySelectorAll("#navbarContent .nav-link");
  const navbarCollapse = document.getElementById("navbarContent");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        collapse.hide();
      }
    });
  });

  // Botão de voltar ao topo.
  const backToTop = document.querySelector(".back-to-top");

  function toggleBackToTop() {
    if (!backToTop) return;

    if (window.scrollY > 500) {
      backToTop.classList.add("is-visible");
    } else {
      backToTop.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();
})();
