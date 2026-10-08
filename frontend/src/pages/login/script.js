const form = document.getElementById("login-form");
const botao = document.getElementById("botao");
const erro = document.getElementById("erro");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  erro.textContent = "";

  const usuario = form.usuario.value.trim();
  const senha = form.senha.value;

  if (!usuario || !senha) {
    erro.textContent = "Preencha usuário e senha.";
    return;
  }

  botao.disabled = true;
  botao.textContent = "Entrando...";

  try {
    const resposta = await fetch("http://localhost:3000/auth/login", { // ajuste quando a rota existir
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, senha }),
    });

    if (!resposta.ok) {
      erro.textContent = "Usuário ou senha inválidos.";
      return;
    }

    const dados = await resposta.json();
    localStorage.setItem("token", dados.access_token);   // melhorar depois (cookie HttpOnly)
    window.location.href = "/painel";                    // ajuste a rota de destino
  } catch {
    erro.textContent = "Não foi possível conectar ao servidor.";
  } finally {
    botao.disabled = false;
    botao.textContent = "Entrar →";
  }
});
