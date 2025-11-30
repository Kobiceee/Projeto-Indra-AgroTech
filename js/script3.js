const botao = document.getElementById("btn-enviar");

botao.addEventListener("click", function(event) {
    event.preventDefault();

    const i_nome = document.getElementById("nome").value.trim();
    const i_email = document.getElementById("email").value.trim();
    const i_msg = document.getElementById("mensagem").value.trim();

    if (i_nome === "") {
        alert("Por favor, preencha o seu nome completo.");
        return;
    }

    const partes = i_nome.split(" ").filter(p => p.length > 0);

    if (partes.length < 2) {
        alert("Por favor, insira também o seu sobrenome.");
        return;
    }

    if (partes[0].length < 2 || partes[1].length < 2) {
        alert("Nome e sobrenome devem ter ao menos 2 letras cada.");
        return;
    }

    if (i_email === "") {
        alert("Por favor, preencha o seu e-mail.");
        return;
    }

    if (!i_email.includes("@") || !i_email.includes(".")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (i_msg === "") {
        alert("Por favor, escreva sua mensagem.");
        return;
    }

    if (i_msg.length > 500) {
        alert("Sua mensagem deve ter no máximo 500 caracteres.");
        return;
    }

    const div = document.createElement("div");
    div.id = "container";
    div.classList.add("fim");

    const mensagem = document.createElement("p");
    mensagem.classList.add("agradecimento");
    mensagem.innerHTML = `
        Agradecemos pelo seu interesse <u>${i_nome}</u>!<br>
        Juntos, podemos cultivar um futuro mais verde e consciente.
    `;

    div.appendChild(mensagem);

    const destino = document.querySelector(".inserir_div");
    destino.innerHTML = "";
    destino.appendChild(div);

    console.log(i_nome, i_email, i_msg);

    document.getElementById("form_cadastro").reset();

    destino.scrollIntoView({ behavior: "smooth" });
});
