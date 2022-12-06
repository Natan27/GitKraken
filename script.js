const lampada = document.getElementById('lamp');
const btnOn = document.getElementById('btnOn');
const btnOff = document.getElementById('btnOff');
const title = document.getElementById('title');

function quebrado () {
    alert('A Lâmpada está quebrada!, Aperte F5 para Recarregar')
}

btnOn.onclick = function ligar () {
    if (lampada.value != 'quebrado') {
        lampada.src = './imagens/ligada.jpg';
    } else {
        quebrado ();
    }
}

btnOff.onclick = function desligar () {
    if (lampada.value != 'quebrado') {
        lampada.src = './imagens/desligada.jpg';
    } else {
        quebrado ();
    }
}

lampada.ondblclick = function quebrar () {
    lampada.src = './imagens/quebrada.jpg';
    lampada.value = 'quebrado';
    title.innerHTML = 'Lâmpada quebrada!';
}