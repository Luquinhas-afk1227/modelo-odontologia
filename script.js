// Número de demonstração (quando fechar com uma clínica, basta trocar aqui)
const TELEFONE_CLINICA = "5585999990000";

// Abre o WhatsApp com mensagem personalizada para cada botão ou tratamento
document.querySelectorAll(".btn-whatsapp").forEach((botao) => {
  botao.addEventListener("click", () => {
    const mensagem =
      botao.getAttribute("data-mensagem") ||
      "Olá! Vim pelo site e gostaria de agendar uma avaliação.";
    const url = `https://wa.me/${TELEFONE_CLINICA}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

// Controle do menu mobile
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Controle do acordeão de Perguntas Frequentes (FAQ)
document.querySelectorAll(".faq-question").forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const itemAtual = pergunta.parentElement;
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== itemAtual) {
        item.classList.remove("active");
      }
    });
    itemAtual.classList.toggle("active");
  });
});