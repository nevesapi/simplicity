/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");

const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoTelefone = formulario.querySelector("#telefone");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");

const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

$(campoTelefone).mask("(00) 00000-0000");
$(campoCep).mask("00000-000");

botaoBuscar.addEventListener("click", async function () {
  if (campoCep.value.length !== 9) {
    mensagemStatus.textContent = "Digite um CEP válido";
    mensagemStatus.style.color = "purple";

    return;
  }

  let cepDigitado = campoCep.value;
  let urlViaCep = `https://viacep.com.br/ws/${cepDigitado}/json/`;

  let response = await fetch(urlViaCep);
  let data = await response.json();

  console.log(data);

  if ("erro" in data) {
    mensagemStatus.textContent = "CEP inexistente";
    mensagemStatus.style.color = "red";
  } else {
    mensagemStatus.textContent = "CEP encontrado";
    mensagemStatus.style.color = "green";

    const campos = formulario.querySelectorAll(".campos-restantes");

    campos.forEach((campo) => {
      campo.classList.remove("campos-restantes");
    });

    campoEndereco.value = data.logradouro;
    campoBairro.value = data.bairro;
    campoCidade.value = data.localidade;
    campoEstado.value = data.uf;
  }
});
