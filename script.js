
window.onload = function() {
    alert("Bem-vindo ao meu site!");
}


function exibirMensagem() {
    alert("cuidado para não queimar a camera!");
}


function atualizarInformacoesPerfil(event) {
    event.preventDefault();
    
    var nomeCompleto = document.getElementById("input-nome").value;
    var descricao = document.getElementById("input-descricao").value;
    

    document.getElementById("nome-completo").textContent = nomeCompleto;
    document.getElementById("descricao").textContent = descricao;
}

document.getElementById("formulario-perfil").addEventListener("submit", atualizarInformacoesPerfil);
