export default function porcento({num1, num2}){
    var porcento = (100-((num1/num2)*100)).toFixed(0)
    return porcento
}