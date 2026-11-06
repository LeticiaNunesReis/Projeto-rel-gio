/* 1. Relógio */
function atualizarRelogio() {
    let agora = new Date();
    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let segundos = String(agora.getSeconds()).padStart(2, '0');

    document.getElementById("relogio").innerText =
        horas + ":" + minutos + ":" + segundos;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);


/* 2. Verificar idade */
function verificarIdade() {
    let idadeTexto = document.getElementById("idade").value;
    let resultado = document.getElementById("resultadoIdade");

    if (idadeTexto.trim() === "") {
        resultado.innerText = "Digite sua idade.";
        resultado.style.color = "orange";
        return;
    }

    let idade = Number(idadeTexto);

    if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
        resultado.innerText = "Digite uma idade válida.";
        resultado.style.color = "orange";
        return;
    }

    if (idade >= 18) {
        resultado.innerText = "Entrada permitida";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Entrada Negada";
        resultado.style.color = "red";
    }
}


/* 3. Mudar o tema */
function mudarTema() {
    document.body.classList.toggle("escuro");
}


/* 4. Música de fundo */
window.addEventListener("load", function() {
    let musica = document.getElementById("musicaFundo");

    musica.volume = 0.3;

    musica.play().catch(function() {
        console.log("O navegador bloqueou a reprodução automática.");
    });
});

document.addEventListener("click", function iniciarSom() {
    let musica = document.getElementById("musicaFundo");

    musica.volume = 0.3;
    musica.play().catch(function() {});

}, { once: true });
