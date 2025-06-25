let currentInput = '';  // Variável que armazena a entrada do usuário
let operation = '';     // Variável que armazena a operação selecionada
let firstOperand = '';  // Primeiro operando
let secondOperand = ''; // Segundo operando

// Função para adicionar número ao visor
function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

// Função para escolher a operação (+, -, *, /)
function chooseOperation(op) {
    if (currentInput === '') return; // Se não houver número, não faz nada

    // Armazenar o primeiro operando
    firstOperand = currentInput;
    operation = op;  // Definir a operação
    currentInput = ''; // Limpar a entrada para o próximo número
}

// Função para calcular o resultado
function calculateResult() {
    if (firstOperand === '' || currentInput === '') return; // Caso algum valor não tenha sido inserido

    secondOperand = currentInput;

    let result;

    // Realizando a operação matemática
    switch (operation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    // Exibindo o resultado
    document.getElementById('result').value = result;
    currentInput = result;  // Armazenar o resultado para possíveis novos cálculos
    firstOperand = '';  // Limpar o primeiro operando
    operation = '';     // Limpar a operação
}

// Função para limpar o visor
function clearResult() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    operation = '';
    document.getElementById('result').value = '';
}
