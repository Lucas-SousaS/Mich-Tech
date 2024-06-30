export default function formatador(numero) {
    var numFormatado = ((numero)).toFixed(2).replace(".",",");
    return numFormatado;
} 