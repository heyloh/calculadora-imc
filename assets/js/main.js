function main() {
  const form = document.querySelector('#formulario');

  function handleSubmit(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);
    
    if(!peso) {
      handleSetResult(`Peso inválido.`, false);
      return;
    } 
    if(!altura) {
      handleSetResult(`Altura inválida.`, false);
      return;
    }
    
    const imc = (peso / Math.pow(altura, 2)).toFixed(2);

    const imcMsg = handleGetImcMsg(imc);

    handleSetResult(imcMsg, true);
  }

  form.addEventListener('submit', handleSubmit);
}

main();

function handleGetImcMsg(imc) {
  if(imc < 18.5) {
    return `Seu IMC é ${imc} (Abaixo do peso).`;
  }
  
  if(imc <= 24.9) {
    return `Seu IMC é ${imc} (Peso normal).`;
  }
  
  if(imc <= 29.9) {
    return `Seu IMC é ${imc} (Sobrepeso).`;
  }
  
  if(imc <= 34.9) {
    return `Seu IMC é ${imc} (Obesidade grau 1).`;
  }
  
  if(imc <= 39.9) {
    return `Seu IMC é ${imc} (Obesidade grau 2).`;
  }
  
  if(imc >= 40) {
    return `Seu IMC é ${imc} (Obesidade grau 3).`;
  }
}

function handleSetResult(msg, isValid) {
  const result = document.querySelector('#resultado');
  result.innerHTML = '';
  const p = document.createElement('p');
  if(isValid) {
    p.classList.add('result-success');
  } else {
    p.classList.add('result-error')
  }

  p.innerHTML = msg;
  result.appendChild(p);
}
