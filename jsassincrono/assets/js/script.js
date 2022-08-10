const urlApi = "https://thatcopy.pw/catapi/rest/";
const botao = document.getElementById("muda-cat");

const puxarCats = async () => {
  try {
    const dados = await fetch(urlApi);
    const json = await dados.json();
    return json.webpurl;
  } catch (error) {
    console.log(error.message);
  }
};
const carregaCats = async () => {
  const implementar = document.getElementById("cat-aqui");
  implementar.src = await puxarCats();
};
botao.addEventListener("click", carregaCats);

carregaCats();
