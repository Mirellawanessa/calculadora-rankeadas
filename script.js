// Função para calcular o nível do jogador com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Função para calcular e exibir o resultado na tela
let historico = [];

function calcularResultado() {
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);

    // Validação de entrada
    if (isNaN(vitorias) || isNaN(derrotas)) {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos para vitórias e derrotas.";
        return;
    }

    if (vitorias < 0 || derrotas < 0) {
        document.getElementById("resultado").innerText = "Vitórias e derrotas não podem ser valores negativos.";
        return;
    }

    // Calcula e exibe o resultado
    const resultado = calcularNivel(vitorias, derrotas);
    document.getElementById("resultado").innerText = resultado;

    // Adiciona o cálculo ao histórico
    historico.push(`Vitórias: ${vitorias}, Derrotas: ${derrotas}, Nível: ${resultado}`);

    // Atualiza a lista de histórico
    atualizarHistorico();
}

// Função para atualizar o histórico de cálculos
function atualizarHistorico() {
    const listaHistorico = document.getElementById("lista-historico");
    listaHistorico.innerHTML = ''; // Limpa o histórico atual
    historico.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaHistorico.appendChild(li);
    });

    // Salva o histórico no localStorage
    localStorage.setItem('historico', JSON.stringify(historico));
}

// Carregar o histórico salvo do localStorage ao carregar a página
window.onload = function() {
    const historicoSalvo = localStorage.getItem('historico');
    if (historicoSalvo) {
        historico = JSON.parse(historicoSalvo);
        atualizarHistorico();
}
};
