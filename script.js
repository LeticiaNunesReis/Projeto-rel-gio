function verificarIdade() {
    // 1. Função para atualizar o horário atual automaticamente
    function atualizarRelogio() {
        let agora = new Date();
        let horas = String(agora.getHours()).padStart(2, '0');
        let minutos = String (agora.getMinutes()).padStart(2, '0');
        let segundos = String(agora.getSeconds()).padStart(2, '0');

        document.getElementById("relogio").innerText = horas + ":" + minutos + ":" + segundos; 
    }

    //Atualiza o relógio a cada 1 segundo
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
    
    //2. Função para verificar a idade (Entrada no evento)

    function verificarIdade() {
        let idadeTexto = document.getElementById("idade").value;
        let resultado = document.getElementById("resultadoIdade");

        if (idadeTexto.trim () === "") {
            resultado.innerText = "Digite sua idade.";
            return;
        }

        let idade = Number(idadeTexto);

        if (Number.isInteger(idade) || idade < 0 || idade > 120 ) {
            resultado.innerText = "Digite uma idade válida.";
            resultado.style.color = "orange";
            return; 
        } 
        
        if (idade >= 18) {
            resultado.innerText = "Entrada Permitida";
            resultado.style.color = "green";
        } else {
            resultado.innerText = "Entrada Proibida";
            resultado.style.color = "red";
         }
    }

}

// 3. Função para mudar o tema do site
    function mudarTema() {
        document.body.classList.toggle("escuro");
    }


    window.addEventListener("load", function() {
    let musica = document.getElementById("musicaFundo");

    musica.volume = 0.3;

    musica.play().catch(function(erro) {
        console.log("O navegador bloqueou a reprodução automática.");
    });
});

document.addEventListener("click",
    function iniciarSom() {
        let musica =
        document.getElementById("musicaFundo");

        musica.volume = 0.3;
        musica.play();
    
    }, {once: true });