async function analisarEndereco(url) {
    const key = 'AIzaSyDWEpSlB5HBaRrxLTYFXaZb7hLxsMaEYxY';
    const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${key}`;

    try {
        const response = await fetch(api);
        const data = await response.json();

        const categorias = data.lighthouseResult?.categories;

        // Pega score com segurança
        const getScore = (campo) => {
            const valor = categorias?.[campo]?.score;
            return typeof valor === 'number' ? Math.round(valor * 100) : 0;
        };

        return {
            performance: getScore('performance'),
            seo: getScore('seo'),
            usabilidade: getScore('accessibility'),
            praticas: getScore('best-practices'),
        };

    } catch (erro) {
        console.error("Erro ao analisar URL:", erro);
        return { performance: 0, seo: 0, usabilidade: 0, praticas: 0 };
    }
}



async function passarParametro() {

    const url = document.getElementById('url').value;

    if (!url) {
        alert("Digite uma URL!");
        return;
    }

    // Processa os dados
    const resultado = await analisarEndereco(url);

    // Preenche valores nos IDs
    document.getElementById('performance').innerText = resultado.performance;
    document.getElementById('seo').innerText = resultado.seo;
    document.getElementById('usabilidade').innerText = resultado.usabilidade;
    document.getElementById('praticas').innerText = resultado.praticas;

    // Aplica cores
    aplicarCor('performance', resultado.performance);
    aplicarCor('seo', resultado.seo);
    aplicarCor('usabilidade', resultado.usabilidade);
    aplicarCor('praticas', resultado.praticas);
}



// Função para aplicar cores automaticamente
function aplicarCor(id, valor) {
    const elemento = document.getElementById(id);

    elemento.classList.remove('bom', 'medio', 'ruim');

    if (valor >= 90) {
        elemento.classList.add('bom');       // Verde
    } else if (valor >= 50) {
        elemento.classList.add('medio');     // Amarelo
    } else {
        elemento.classList.add('ruim');      // Vermelho
    }
}
