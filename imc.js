const calcular = document.getElementById('calcular');


function imc () {
				const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');
if (nome !== '' && altura !== '' && peso !== '') {
				const valorimc = (peso /(altura*altura)).toFixed(1);
			
				let classificacao="";
				if (valorimc < 18.5){
								classificacao='abaixo do peso'
				}
				else if (valorimc <25){
								classificacao='com o peso ideal.'
				}
				else if (valorimc <30){
								classificacao='levemente acima do peso.'
				}
				else if (valorimc <35){
								classificacao='com obesidade garu I.'
				}
				else if (valorimc <40){
								classificacao='com o obsidade grau II.'
				}
				else{
								classificacao='com o obesidade grau III.'
				}
				
				resultado.textContent = `${nome} seu IMC é ${valorimc} e você está ${classificacao} `;
} else {
   resultado.textContent = 'Preencha Todos os Campos';
			
}

} 

calcular.addEventListener('click', imc);