const casamento = new Date("November 21, 2026 15:30:00").getTime();

const countdown = document.getElementById("countdown");

function atualizarContagem() {

    const agora = new Date().getTime();

    const distancia = casamento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <h1>${dias} dias</h1>
        <p>${horas}h ${minutos}m ${segundos}s</p>
    `;

}

atualizarContagem();

setInterval(atualizarContagem,1000);
