var btn =document.getElementById("resultado") 
let peso = document.getElementById("peso")
var altura = document.getElementById("altura")

var classificacao = " " 
var num = 0
function imc(){
    
    var num1 = peso.value
    var num2 = altura.value
    // Verifica se os campos estão vazios ou se não são números válidos
   
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        return;
    }


    num = num1 / (num2 * num2)
    
        if(num<18.5){
            classificacao = ", você está abaixo do peso ideal."
         }else if(num<24.9){
             classificacao = ", você está com o peso ideal."
         }else if(num<29.9){
             classificacao = ", você está com Sobepeso."
         }else if(num<34.9){
             classificacao = ", você está com Obesidade grau 1."
         }else if(num<39.9){
             classificacao = ", você está com Obesidade grau 2."
         }else if(num>=40){
             classificacao = ", você está com Obesidade grau 3."
         }
         document.getElementById('imc').innerHTML = "Seu imc é: "+ num.toFixed(2) + classificacao
         limparform()
}
function limparform(){
    document.querySelector('form').reset();
}
