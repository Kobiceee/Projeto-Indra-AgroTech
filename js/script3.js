const botao = document.getElementById("btn-enviar")
botao.addEventListener("click", function(event) {
    event.preventDefault();

    const i_email = document.getElementById("email").value.trim() 
    const i_nome = document.getElementById("nome").value.trim()
    const i_mensagem = document.getElementById("mensagem").value.trim()

    if (i_email === "" || i_mensagem === "" || i_nome === ""){
        alert ("Por favor, preencha todos os campos antes de enviar!");
        return;
    }
        if(!i_email.includes("@") || !i_email.includes(".")){
        alert ("Por favor, insira um e-mail válido")
        document.getElementById("form_cadastro").reset()
        return;
    }

    const div = document.createElement("div");
    div.id = "container";
    div.classList.add ("fim");

    const mensagem = document.createElement("p");
    mensagem.classList.add ("agradecimento");
    mensagem.innerHTML = `Agradecemos pelo seu interesse <u>${i_nome}</u>!<br>Juntos, podemos cultivar um futuro mais verde e consciente.`;
    
    div.appendChild(mensagem);

    const destino = document.querySelector(".inserir_div")
    destino.innerHTML=""
    destino.appendChild(div)

    console.log(i_nome, i_email, i_mensagem)

    document.getElementById("form_info").reset()

    document.querySelector(".inserir_div").scrollIntoView({behavior: "smooth"});
})


