import './style.css'

const form = document.getElementById("formLogin");

if (form) {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const erroEmail = document.getElementById("erroEmail");
  const erroSenha = document.getElementById("erroSenha");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valido = true;

    erroEmail.textContent = "";
    erroSenha.textContent = "";

    if (email.value === "") {
      erroEmail.textContent = "O campo de email é obrigatório.";
      valido = false;
    }

    if (senha.value === "") {
      erroSenha.textContent = "O campo de senha é obrigatório.";
      valido = false;
    }

    if (valido) {
      alert("Login realizado com sucesso!");
    }
  });
}