const urlApi = "https://thatcopy.pw/catapi/rest/";
const puxarCats = async () => {
  try {
    const dados = await fetch(urlApi);
    const json = await dados.json();
    return json.webpurl;
  } catch (error) {
    console.log(error.stack);
  }
};
const carregaCats = async () => {
  const img = document.getElementsByTagName('img') [0];
  img.src = await puxarCats();
};
carregaCats();
const btn = document.getElementById('muda-cat');
btn.addEventListener('click', carregaCats);

