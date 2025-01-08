async function buscarClima() {
    const cityname = document.getElementById('cidade').value;
    const apiKey = 'KXW4DY66HM9EYE7G2QWQQ6QEG';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=KXW4DY66HM9EYE7G2QWQQ6QEG`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (resposta.ok) {
        document.getElementById('cidadeNome').innerText = dados.resolvedAddress;
        document.getElementById('temperatura').innerText = `🌡️ ${dados.currentConditions.temp}°C`;
        document.getElementById('descricao').innerText = dados.currentConditions.conditions;
    } else {
        document.getElementById('resultado').innerHTML = `<p>Cidade não encontrada</p>`;
    }
}
function pesquisar() {
    const termoPesquisa = document.getElementById('search-input').value.toLowerCase();
    const itens = document.querySelectorAll('#lista-resultados li');

    let resultadoEncontrado = false;

    itens.forEach(item => {
        if (item.innerText.toLowerCase().includes(termoPesquisa)) {
            item.style.display = "block";
            resultadoEncontrado = true;
        } else {
            item.style.display = "none";
        }
    });

    if (!resultadoEncontrado) {
        alert("Nenhum resultado encontrado para: " + termoPesquisa);
    }
}
