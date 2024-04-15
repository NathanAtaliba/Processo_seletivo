function inverterString(s) {
    return s.split('').reverse().join('');
}

const texto = "Olá, mundo!"; // Texto que sera invertido
const textoInvertido = inverterString(texto);
console.log(textoInvertido);