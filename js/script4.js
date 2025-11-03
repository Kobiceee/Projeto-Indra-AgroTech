const botao = document.getElementById("btn-enviar")
botao.addEventListener("click", function(event) {
    event.preventDefault();

    const i_email = document.getElementById("email").value.trim() 

    if (i_email === ""){
        alert ("Preencha o seu email, para ser avisado!");
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
    mensagem.innerHTML = `Sua curiosidade nutre nossa evolução. A Indra está cultivando algo especial para você e avisaremos assim que o protótipo florescer.`;
    
    div.appendChild(mensagem);

    const destino = document.querySelector(".inserir_div")
    destino.innerHTML=""
    destino.appendChild(div)

    console.log(i_email,)

    document.getElementById("form_cadastro").reset()

    document.querySelector(".inserir_div").scrollIntoView({behavior: "smooth"});
})
