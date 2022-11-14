const formulario = document.querySelector('form');


function formularioEnviado(resposta){
  if(resposta.ok){
    formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1;padding: 1rem; background: #d3d3d3;  border-radius: 4px ;><span style='color: #371A00'> Enviado com sucesso</span>, em breve entraremos em contato o tempo estimado de resposta é de até 24h </p>"

  }else{
    formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1;padding: 1rem; background: #d3d3d3; border-radius: 4px; '><span style='color: #E00000'>Erro no envio</span>, não se preocupe você pode entrar em contato conosco pelo nosso e-mail em: contato@surfcurse.net </p>"
  }
}

function enviarFormulario(event){
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disabled = true;
  botao.innerText = "Enviando...";


  const data = new FormData(formulario);

  fetch('./enviar.php',{
    method: 'POST',
    body: data
  }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario);