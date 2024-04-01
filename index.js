
const webhookUrl = 'https://discord.com/api/webhooks/1224159848682492055/-67W2R4l1Uq274XUgMrvGNVBAkS_aWa8Tp77iHnFWig7xxw0h7eSn07t1v9YXuhtmYXW';

const DadosForm = document.getElementById('dados-form');
const btnEnviar = document.getElementById('btnEnviar');


DadosForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const nomeCliente = document.getElementById('nomeCliente').value;
  const passaporte = document.getElementById('passaporte').value;
  const telCliente = document.getElementById('telCliente').value;
  const veiculo = document.getElementById('veiculo').value;
  const placa = document.getElementById('placa').value;
  const valor = document.getElementById('valor').value;
  const obs = document.getElementById('obs').value;

  var dataAtual = new Date();

  // Obter partes da data
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1; // Os meses são indexados de 0 a 11
  var ano = dataAtual.getFullYear();

  // Obter partes da hora
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var segundos = dataAtual.getSeconds();

  // Formatar as partes da data e hora
  var dataFormatada = dia + '/' + mes + '/' + ano;
  var horaFormatada = horas + ':' + minutos + ':' + segundos;


  var Msg = `
    ________________________________________\n
    RELATÓRIO DO CONTRATO\n
    Nome do cliente: ${nomeCliente} \n
    Passaporte: ${passaporte} \n
    Telefone de contato: ${telCliente} \n
    Veiculo: ${veiculo} \n
    Placa: ${placa} \n
    Valor do Contrato: ${valor} \n
    Observações: ${obs} \n
    ________________________________________
    ${dataFormatada} / ${horaFormatada}
    `;

  // console.log("```" + Msg + "```");
  //  reset.DadosForm;

  EnviarMsg("```" + Msg + "```");
  alert("Contrato Salvo");
  DadosForm.reset();

});


function EnviarMsg(msg) {

  const xhr = new XMLHttpRequest();
  xhr.open("POST", webhookUrl);
  const formData = new FormData();
  formData.append('content', msg);
  formData.append('username', 'Bot-Sistema aluguel de veiculos');
  formData.append('avatar_url', '');
  xhr.send(formData);
}

