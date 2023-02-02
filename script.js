

function abrirModal() {
    document.getElementById("modalFundo").style.opacity = "1";
    document.getElementById("modalFundo").style.display = "block";
    document.getElementById('modalFundo').style.zIndex = "1";
    document.getElementById("modal").style.opacity = "1";
    document.getElementById("modal").style.display = "block";
}
function fecharModal(){
    document.getElementById("modalFundo").style.opacity = "0";
    document.getElementById("modalFundo").style.display = "none";
    document.getElementById('modalFundo').style.zIndex = "-1";
    document.getElementById("modal").style.opacity = "0";
    document.getElementById("modal").style.display = "none";
}



function showBotao1() {
    document.querySelector('.botaoCompra1').style.opacity = "1";
}
function escondeBotao1() {
    document.querySelector('.botaoCompra1').style.opacity = "0";
}

function showBotao2() {
    document.querySelector('.botaoCompra2').style.opacity = "1";
}
function escondeBotao2() {
    document.querySelector('.botaoCompra2').style.opacity = "0";
}

function showBotao3() {
    document.querySelector('.botaoCompra3').style.opacity = "1";
}
function escondeBotao3() {
    document.querySelector('.botaoCompra3').style.opacity = "0";
}

function showBotao4() {
    document.querySelector('.botaoCompra4').style.opacity = "1";
}
function escondeBotao4() {
    document.querySelector('.botaoCompra4').style.opacity = "0";
}

