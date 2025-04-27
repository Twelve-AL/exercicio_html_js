// Aqui estou pegando o formulário e a mensagem ou valor que o usúario está digitando
const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

// Adicionando o evento que vai acontecer quando o usuario der "Enter"
formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário (recarregar a página)

    // Pegando os valores dos dois campos
    const campoA = parseFloat(document.getElementById('campoA').value); // pesquisei uma forma mais limpa de adicionar os números flutuantes e achei "parseFloat"
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Verifica se o Campo B é maior que o Campo A
    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido! O número B é maior que o número A.';
        mensagem.style.color = 'green'; // Mensagem verde de sucesso
    } else {
        mensagem.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
        mensagem.style.color = 'red'; // Mensagem vermelha de erro
    }
});
