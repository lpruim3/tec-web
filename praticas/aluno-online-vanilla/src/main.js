import './style.css'
const form = document.getElementById("formLogin");

if (form) {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const erro = document.getElementById("erro");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (email.value === "" || senha.value === "") {
      erro.textContent = "Preencha todos os campos";
      return;
    }

    erro.textContent = "";
    alert("Login realizado com sucesso!");
  });
}
